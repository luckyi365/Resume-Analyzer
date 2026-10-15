// Initialize Lucide icons on page load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  initApp();
});

// App State
let currentResumeText = '';
let currentJdText = '';
let currentExtractedData = null;

function initApp() {
  const sampleSelector = document.getElementById('sampleSelector');
  const fileInput = document.getElementById('fileInput');
  const dropZone = document.getElementById('dropZone');
  const jdInput = document.getElementById('jdInput');
  const btnAnalyze = document.getElementById('btnAnalyze');
  const btnExportPdf = document.getElementById('btnExportPdf');
  
  // Custom STAR bullet inputs
  const customBulletInput = document.getElementById('customBulletInput');
  const btnRewriteBullet = document.getElementById('btnRewriteBullet');

  // Modal elements
  const btnEditText = document.getElementById('btnEditText');
  const editTextModal = document.getElementById('editTextModal');
  const btnCloseModal = document.getElementById('btnCloseModal');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const btnSaveModal = document.getElementById('btnSaveModal');
  const modalResumeText = document.getElementById('modalResumeText');
  const modalJdText = document.getElementById('modalJdText');

  // Tab buttons
  const tabButtons = document.querySelectorAll('.tab-btn');

  // Character counter for Job Description
  jdInput.addEventListener('input', () => {
    document.getElementById('jdCharCount').textContent = `${jdInput.value.length} chars`;
  });

  // Handle Preset Sample Selection
  sampleSelector.addEventListener('change', (e) => {
    const selectedKey = e.target.value;
    if (selectedKey && window.mockData[selectedKey]) {
      const data = window.mockData[selectedKey];
      currentResumeText = data.resumeText;
      currentJdText = data.jobDescription;
      jdInput.value = currentJdText;
      document.getElementById('jdCharCount').textContent = `${currentJdText.length} chars`;
      
      // Update upload status text
      const status = document.getElementById('uploadStatus');
      status.textContent = `Preset Loaded: ${data.roleTitle}`;
      status.classList.remove('hidden');
      
      // Automatically trigger analysis for preset
      triggerAnalysis(true, selectedKey);
    } else {
      clearInputs();
    }
  });

  // Drag & Drop event handlers
  dropZone.addEventListener('click', () => fileInput.click());
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('border-indigo-500', 'bg-indigo-950/10');
  });

  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('border-indigo-500', 'bg-indigo-950/10');
  });

  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('border-indigo-500', 'bg-indigo-950/10');
    
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFileUpload(e.target.files[0]);
    }
  });

  // File Upload parsing
  function handleFileUpload(file) {
    const status = document.getElementById('uploadStatus');
    status.classList.remove('hidden');
    status.textContent = `Reading ${file.name}...`;

    const reader = new FileReader();
    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'txt') {
      reader.onload = (e) => {
        currentResumeText = e.target.result;
        status.textContent = `TXT Extracted: ${file.name} (${Math.round(file.size / 1024)} KB)`;
      };
      reader.readAsText(file);
    } 
    else if (extension === 'docx') {
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        window.mammoth.extractRawText({ arrayBuffer: arrayBuffer })
          .then((result) => {
            currentResumeText = result.value;
            status.textContent = `DOCX Extracted: ${file.name}`;
          })
          .catch((err) => {
            status.textContent = `Error reading DOCX: ${err.message}`;
          });
      };
      reader.readAsArrayBuffer(file);
    } 
    else if (extension === 'pdf') {
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        const typedarray = new Uint8Array(arrayBuffer);
        window.pdfjsLib.getDocument(typedarray).promise.then((pdf) => {
          let maxPages = pdf.numPages;
          let countPromises = [];
          
          for (let j = 1; j <= maxPages; j++) {
            countPromises.push(
              pdf.getPage(j).then((page) => {
                return page.getTextContent().then((textContent) => {
                  return textContent.items.map(s => s.str).join(' ');
                });
              })
            );
          }
          
          Promise.all(countPromises).then((texts) => {
            currentResumeText = texts.join('\n');
            status.textContent = `PDF Extracted: ${file.name} (${maxPages} pages)`;
          });
        }).catch((err) => {
          status.textContent = `Error reading PDF: ${err.message}`;
        });
      };
      reader.readAsArrayBuffer(file);
    } 
    else {
      status.textContent = `Unsupported file format.`;
    }
  }

  // Trigger analysis click
  btnAnalyze.addEventListener('click', () => {
    currentJdText = jdInput.value.trim();
    if (!currentResumeText) {
      alert("Please upload a resume or select a preset template first.");
      return;
    }
    if (!currentJdText) {
      alert("Please paste a job description to compare the resume against.");
      return;
    }
    triggerAnalysis(false);
  });

  // Run dynamic analysis or load preset
  function triggerAnalysis(isPreset, presetKey = '') {
    // Show loading scanner animations
    document.getElementById('welcomeSplash').classList.add('hidden');
    document.getElementById('resultsDashboard').classList.add('hidden');
    
    const loadingSplash = document.getElementById('loadingSplash');
    loadingSplash.classList.remove('hidden');

    resetLoadingSteps();

    // Step-by-step progress simulation (250ms per step)
    setTimeout(() => { updateLoadingStep('loadStep1', 'Complete'); }, 300);
    setTimeout(() => { updateLoadingStep('loadStep2', 'Complete'); }, 600);
    setTimeout(() => { updateLoadingStep('loadStep3', 'Complete'); }, 900);
    setTimeout(() => { 
      updateLoadingStep('loadStep4', 'Complete'); 
      // Complete animation & render dashboard
      setTimeout(() => {
        loadingSplash.classList.add('hidden');
        document.getElementById('resultsDashboard').classList.remove('hidden');
        
        if (isPreset) {
          renderPresetReport(presetKey);
        } else {
          renderParsedReport();
        }
      }, 300);
    }, 1200);
  }

  // Reset loading UI
  function resetLoadingSteps() {
    ['loadStep1', 'loadStep2', 'loadStep3', 'loadStep4'].forEach(id => {
      const el = document.getElementById(id);
      el.classList.remove('text-indigo-400', 'font-semibold');
      el.classList.add('text-slate-500');
      el.querySelector('.step-dot').className = 'w-1.5 h-1.5 rounded-full bg-slate-600 step-dot';
      el.querySelector('.step-status').textContent = 'Waiting';
    });
  }

  function updateLoadingStep(id, statusText) {
    const el = document.getElementById(id);
    el.classList.remove('text-slate-500');
    el.classList.add('text-indigo-400', 'font-semibold');
    el.querySelector('.step-dot').className = 'w-1.5 h-1.5 rounded-full bg-indigo-500 step-dot animate-ping';
    el.querySelector('.step-status').textContent = statusText;
  }

  // Clear inputs helper
  function clearInputs() {
    currentResumeText = '';
    currentJdText = '';
    jdInput.value = '';
    document.getElementById('jdCharCount').textContent = '0 chars';
    document.getElementById('uploadStatus').classList.add('hidden');
    document.getElementById('uploadStatus').textContent = '';
    document.getElementById('welcomeSplash').classList.remove('hidden');
    document.getElementById('resultsDashboard').classList.add('hidden');
    document.getElementById('loadingSplash').classList.add('hidden');
  }

  // Render Preset data
  function renderPresetReport(key) {
    const data = window.mockData[key];
    currentExtractedData = data;
    
    // Header Info
    document.getElementById('candName').textContent = data.parsedResume.name;
    document.getElementById('candContact').textContent = data.parsedResume.contact;
    document.getElementById('resumeSummary').textContent = data.parsedResume.summary;

    // Contact Links
    document.getElementById('linkGithub').querySelector('span').textContent = data.parsedResume.links.github || "Not Mentioned";
    document.getElementById('linkLinkedin').querySelector('span').textContent = data.parsedResume.links.linkedin || "Not Mentioned";
    document.getElementById('linkPortfolio').querySelector('span').textContent = data.parsedResume.links.portfolio || "Not Mentioned";

    // Summary Highlights (Requirement)
    const highlightsUl = document.getElementById('resumeHighlightsList');
    highlightsUl.innerHTML = '';
    
    // Build highlights from parsed experience & projects
    if (data.parsedResume.education && data.parsedResume.education[0]) {
      const edu = data.parsedResume.education[0];
      highlightsUl.innerHTML += `<li><strong>Education:</strong> ${edu.degree} from ${edu.institution} (${edu.gpa ? 'GPA ' + edu.gpa : 'N/A'})</li>`;
    }
    if (data.parsedResume.experience && data.parsedResume.experience[0]) {
      const exp = data.parsedResume.experience[0];
      highlightsUl.innerHTML += `<li><strong>Latest Role:</strong> ${exp.role} at ${exp.company}</li>`;
    }
    if (data.parsedResume.projects && data.parsedResume.projects[0]) {
      highlightsUl.innerHTML += `<li><strong>Key Project:</strong> ${data.parsedResume.projects[0].name}</li>`;
    }
    if (data.parsedResume.skills && data.parsedResume.skills.languages) {
      highlightsUl.innerHTML += `<li><strong>Core Languages:</strong> ${data.parsedResume.skills.languages.slice(0, 4).join(', ')}</li>`;
    }

    // Verdicts & Scores (Section A & B)
    const score = data.analysis.overallScore;
    document.getElementById('scoreText').textContent = score;
    
    // Update SVG Circle Offset (r=70, circumference=440)
    const circle = document.getElementById('scoreCircle');
    const offset = 440 - (440 * score) / 100;
    circle.style.strokeDashoffset = offset;
    
    // Color updates for gauge
    updateScoreColors(score);

    // Verdict Statement
    document.getElementById('verdictDescription').textContent = data.analysis.verdictDescription;
    document.getElementById('finalRecruiterFeedback').textContent = data.analysis.recruiterFeedback;

    // Risk level
    const riskBadge = document.getElementById('riskLevel');
    riskBadge.textContent = data.analysis.riskAssessment.level;
    riskBadge.className = `text-sm font-bold inline-flex items-center gap-1.5 mt-1 ${getRiskColorClass(data.analysis.riskAssessment.level)}`;

    // Component Scores
    updateProgressBars(data.analysis.componentScores);

    // Interview Probability (Section P)
    document.getElementById('probPhone').textContent = `${data.analysis.interviewProbability.phoneScreen}%`;
    document.getElementById('probTechnical').textContent = `${data.analysis.interviewProbability.technicalRound}%`;
    document.getElementById('probFinal').textContent = `${data.analysis.interviewProbability.finalRound}%`;
    document.getElementById('probOffer').textContent = `${data.analysis.interviewProbability.offerProbability}%`;
    document.getElementById('interviewAssumptions').innerHTML = `<strong>Recruiter Assumptions:</strong> ${data.analysis.interviewProbability.assumptions}`;

    // Matching Skills (Section D - User Request)
    const matchTable = document.getElementById('matchingSkillsTable');
    matchTable.innerHTML = '';
    data.analysis.matchingSkills.forEach(item => {
      matchTable.innerHTML += `
        <tr class="hover:bg-slate-900/30 transition">
          <td class="py-2.5 font-bold text-white">${item.skill}</td>
          <td class="py-2.5 pr-2">
            <div class="text-xs text-slate-300"><strong>Resume:</strong> ${item.resumeEvidence}</div>
            <div class="text-[10px] text-slate-400 mt-0.5"><strong>Job Specification:</strong> ${item.jdEvidence}</div>
          </td>
          <td class="py-2.5 text-right font-bold text-emerald-400">${item.match}%</td>
        </tr>
      `;
    });

    // Missing Skills (Section E - User Request)
    const criticalMissing = document.getElementById('missingSkillsCritical');
    criticalMissing.innerHTML = '';
    if (data.analysis.missingSkills.critical.length === 0) {
      criticalMissing.innerHTML = `<span class="text-slate-400 italic">None. Core blockers resolved.</span>`;
    } else {
      data.analysis.missingSkills.critical.forEach(item => {
        criticalMissing.innerHTML += `
          <div class="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-lg flex flex-col gap-1">
            <span class="font-bold text-rose-400 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span> ${item.skill}</span>
            <span class="text-[10px] text-slate-300">${item.reason}</span>
            <span class="text-[9px] text-indigo-300 mt-1 font-semibold">Recommended: ${item.courses}</span>
          </div>
        `;
      });
    }

    const importantMissing = document.getElementById('missingSkillsImportant');
    importantMissing.innerHTML = '';
    if (data.analysis.missingSkills.important.length === 0) {
      importantMissing.innerHTML = `<span class="text-slate-400 italic">No missing secondary skills.</span>`;
    } else {
      data.analysis.missingSkills.important.forEach(item => {
        importantMissing.innerHTML += `
          <div class="p-2.5 bg-amber-500/10 border border-amber-500/20 rounded-lg flex flex-col gap-1">
            <span class="font-bold text-amber-400 flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> ${item.skill}</span>
            <span class="text-[10px] text-slate-300">${item.reason}</span>
            <span class="text-[9px] text-indigo-300 mt-1 font-semibold">Recommended: ${item.courses}</span>
          </div>
        `;
      });
    }

    const niceMissing = document.getElementById('missingSkillsNice');
    niceMissing.innerHTML = '';
    if (data.analysis.missingSkills.niceToHave.length === 0) {
      niceMissing.innerHTML = `<span class="text-slate-400 italic">None</span>`;
    } else {
      data.analysis.missingSkills.niceToHave.forEach(item => {
        niceMissing.innerHTML += `
          <span class="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300 flex flex-col gap-0.5">
            <strong>${item.skill}</strong>
            <span class="text-[8px] text-slate-500">Rec: ${item.courses}</span>
          </span>
        `;
      });
    }

    // Heatmap (Section K)
    const heatContainer = document.getElementById('heatmapContainer');
    heatContainer.innerHTML = '';
    Object.keys(data.analysis.heatmap).forEach(domain => {
      const val = data.analysis.heatmap[domain];
      const colorClass = getHeatmapColorClass(val);
      heatContainer.innerHTML += `
        <div class="p-4 rounded-xl text-center heatmap-cell ${colorClass} text-xs flex flex-col justify-center gap-1">
          <span class="font-bold capitalize text-white">${domain}</span>
          <span class="font-extrabold text-lg">${val}%</span>
        </div>
      `;
    });

    // Soft Skills (Section L)
    const softContainer = document.getElementById('softSkillsContainer');
    softContainer.innerHTML = '';
    Object.keys(data.analysis.softSkillAnalysis).forEach(skill => {
      if (skill === 'recruiterConfidence') return;
      const item = data.analysis.softSkillAnalysis[skill];
      softContainer.innerHTML += `
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-xs font-semibold">
            <span class="capitalize text-slate-300">${skill}</span>
            <span class="text-indigo-400 font-bold">${item.rating}%</span>
          </div>
          <div class="w-full bg-slate-900 rounded-full h-1.5">
            <div class="bg-indigo-500 h-1.5 rounded-full" style="width: ${item.rating}%"></div>
          </div>
          <p class="text-[10px] text-slate-400 leading-normal italic">"${item.evidence}"</p>
        </div>
      `;
    });
    document.getElementById('recruiterConfidence').textContent = data.analysis.softSkillAnalysis.recruiterConfidence || "High";

    // Career History (Section G)
    document.getElementById('expReq').textContent = data.analysis.experienceAnalysis.yearsRequired;
    document.getElementById('expAvail').textContent = data.analysis.experienceAnalysis.yearsAvailable;
    document.getElementById('expRelevant').textContent = data.analysis.experienceAnalysis.relevant;
    document.getElementById('expTransferable').textContent = data.analysis.experienceAnalysis.transferable;
    document.getElementById('expMissing').textContent = data.analysis.experienceAnalysis.missing;
    document.getElementById('expIndustryFit').textContent = data.analysis.experienceAnalysis.industryFit;

    // Projects Evaluation (Section H)
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';
    data.analysis.projectEvaluation.forEach(project => {
      projectsContainer.innerHTML += `
        <div class="p-4 bg-slate-900/60 border border-slate-800 rounded-xl relative overflow-hidden">
          <div class="absolute right-4 top-4 px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
            Relevance Score: ${project.score}%
          </div>
          <h4 class="text-sm font-bold text-white">${project.name}</h4>
          <p class="text-[10px] text-slate-400 mt-1"><strong>Keywords:</strong> ${project.tech}</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-850 text-xs">
            <div>
              <span class="text-slate-500">Business Impact:</span>
              <p class="text-slate-300 mt-0.5">${project.impact}</p>
            </div>
            <div>
              <span class="text-slate-500">Technical Innovation:</span>
              <p class="text-slate-300 mt-0.5">${project.innovation}</p>
            </div>
          </div>
        </div>
      `;
    });

    // Education (Section I)
    document.getElementById('eduDegree').textContent = data.analysis.educationAnalysis.degreeRelevance;
    document.getElementById('eduGpa').textContent = data.analysis.educationAnalysis.cgpaRelevance;
    document.getElementById('eduCourse').textContent = data.analysis.educationAnalysis.courseRelevance;
    document.getElementById('eduMasters').textContent = data.analysis.educationAnalysis.mastersPreference;

    // Certifications (Section J)
    const certValid = document.getElementById('certValid');
    certValid.innerHTML = '';
    if (data.analysis.certificationAnalysis.relevant.length === 0) {
      certValid.innerHTML = `<li class="text-slate-500 italic">Not Mentioned</li>`;
    } else {
      data.analysis.certificationAnalysis.relevant.forEach(cert => {
        certValid.innerHTML += `
          <li class="flex items-start gap-2">
            <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
            <div>
              <span class="font-bold text-slate-200">${cert.name}</span>
              <p class="text-[10px] text-slate-400 mt-0.5">${cert.value}</p>
            </div>
          </li>
        `;
      });
    }

    const certRecs = document.getElementById('certRecs');
    certRecs.innerHTML = '';
    if (data.analysis.certificationAnalysis.recommended.length === 0 && data.analysis.certificationAnalysis.missing.length === 0) {
      certRecs.innerHTML = `<li class="text-slate-500 italic">None</li>`;
    } else {
      const combinedCerts = [...data.analysis.certificationAnalysis.missing, ...data.analysis.certificationAnalysis.recommended];
      combinedCerts.slice(0, 3).forEach((cert, i) => {
        certRecs.innerHTML += `
          <li class="flex items-start gap-2">
            <span class="w-5 h-5 rounded bg-slate-900 border border-slate-800 text-[10px] font-bold text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">${i+1}</span>
            <div>
              <span class="font-bold text-slate-200">${cert.name}</span>
              <p class="text-[10px] text-slate-400 mt-0.5">${cert.value}</p>
            </div>
          </li>
        `;
      });
    }

    // Strengths & Weaknesses (Section M & N)
    const strList = document.getElementById('strengthsList');
    strList.innerHTML = '';
    data.analysis.strengths.forEach(str => {
      strList.innerHTML += `<li>${str}</li>`;
    });

    const wkList = document.getElementById('weaknessesList');
    wkList.innerHTML = '';
    data.analysis.weaknesses.forEach(wk => {
      wkList.innerHTML += `<li>${wk}</li>`;
    });

    // Keyword & Density (Section F)
    document.getElementById('kwDensity').textContent = `${data.analysis.keywordAnalysis.density}%`;
    document.getElementById('kwVisibility').textContent = data.analysis.keywordAnalysis.searchVisibility;
    document.getElementById('kwOptScore').textContent = `${data.analysis.keywordAnalysis.optimizationScore}%`;

    const matchedPills = document.getElementById('kwMatchedPills');
    matchedPills.innerHTML = '';
    data.analysis.keywordAnalysis.matched.forEach(kw => {
      matchedPills.innerHTML += `<span class="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-semibold text-emerald-400">${kw}</span>`;
    });

    const missingPills = document.getElementById('kwMissingPills');
    missingPills.innerHTML = '';
    data.analysis.keywordAnalysis.missing.forEach(kw => {
      missingPills.innerHTML += `<span class="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-semibold text-amber-400">${kw}</span>`;
    });

    // STAR Bullet Improvement Rewriter (Section R & S)
    const improvementsContainer = document.getElementById('bulletImprovementsContainer');
    improvementsContainer.innerHTML = '';
    data.analysis.bulletImprovements.forEach(item => {
      improvementsContainer.innerHTML += `
        <div class="p-4 bg-slate-900/60 border border-slate-800 rounded-xl bullet-card">
          <div class="flex flex-col gap-3">
            <div>
              <span class="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Original Resume Bullet</span>
              <p class="text-xs text-slate-400 mt-1 line-through">"${item.original}"</p>
            </div>
            <div>
              <span class="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1"><i data-lucide="sparkles" class="w-3 h-3"></i> Recommended STAR Bullet (Quantified)</span>
              <p class="text-xs text-slate-200 mt-1 font-medium bg-slate-950 p-2.5 rounded-lg border border-slate-850">"${item.improved}"</p>
            </div>
            <div class="text-[10px] text-slate-500">
              <strong>Quantified Impact:</strong> <span class="text-indigo-300 font-semibold">${item.impact}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Action Verbs (Section S)
    const verbContainer = document.getElementById('missingActionVerbsList');
    verbContainer.innerHTML = '';
    data.analysis.missingActionVerbs.forEach(verb => {
      verbContainer.innerHTML += `<span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[10px] font-bold text-indigo-300 cursor-pointer hover:bg-slate-800 hover:border-slate-700 transition" onclick="insertActionVerb('${verb}')">${verb}</span>`;
    });

    // Suggested job roles (Section T)
    document.getElementById('roleBest').textContent = data.analysis.suggestedJobRoles.bestFit.join(' | ');
    document.getElementById('roleGood').textContent = data.analysis.suggestedJobRoles.goodFit.join(' | ');
    document.getElementById('roleStretch').textContent = data.analysis.suggestedJobRoles.stretchRoles.join(' | ');
    document.getElementById('roleNotRec').textContent = data.analysis.suggestedJobRoles.notRecommended.join(' | ');

    // Learning Roadmap (Section U - User Request)
    const timeline = document.getElementById('learningRoadmapTimeline');
    timeline.innerHTML = '';
    const periods = ['thirtyDays', 'sixtyDays', 'ninetyDays', 'oneEightyDays'];
    const periodTitles = ['30 Days - Core Gaps', '60 Days - Secondary Frameworks', '90 Days - MLOps & Infrastructure', '180 Days - Systems Architecture'];
    
    periods.forEach((period, idx) => {
      const items = data.analysis.learningRoadmap[period];
      let itemsList = '';
      items.items.forEach(itm => {
        itemsList += `<li>${itm}</li>`;
      });
      timeline.innerHTML += `
        <div class="relative">
          <div class="timeline-dot bg-indigo-500 shadow-lg shadow-indigo-500/50"></div>
          <span class="text-[10px] font-extrabold text-indigo-400 uppercase tracking-widest">${periodTitles[idx]}</span>
          <h4 class="text-sm font-bold text-white mt-0.5">${items.title}</h4>
          <ul class="text-xs text-slate-300 mt-2 list-disc pl-4 flex flex-col gap-1 leading-relaxed">
            ${itemsList}
          </ul>
        </div>
      `;
    });

    // Improvements Roadmap (Section Q)
    const impRoadmap = document.getElementById('improvementsRoadmap');
    impRoadmap.innerHTML = '';
    
    const priorities = ['high', 'medium', 'low'];
    const prHeaders = ['High Priority', 'Medium Priority', 'Low Priority'];
    const prColors = ['border-l-rose-500 bg-rose-500/5', 'border-l-amber-500 bg-amber-500/5', 'border-l-slate-500 bg-slate-900/40'];
    
    priorities.forEach((pr, idx) => {
      const items = data.analysis.improvementRoadmap[pr];
      let itemsHtml = '';
      items.forEach(itm => {
        itemsHtml += `
          <div class="p-2.5 bg-slate-950/40 rounded-lg border border-slate-850 flex flex-col gap-0.5">
            <strong class="text-xs text-slate-200">${itm.item}</strong>
            <p class="text-[10px] text-slate-400 leading-normal">${itm.description}</p>
          </div>
        `;
      });
      impRoadmap.innerHTML += `
        <div class="p-4 rounded-xl border border-slate-800 border-l-4 ${prColors[idx]} flex flex-col gap-3">
          <span class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">${prHeaders[idx]}</span>
          <div class="flex flex-col gap-2">
            ${itemsHtml}
          </div>
        </div>
      `;
    });

    // Re-create icons for the newly rendered list items
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Fallback programmatic parser if own documents are uploaded
  function renderParsedReport() {
    // A simplified extraction logic that parses the inputs dynamically
    const name = extractName(currentResumeText);
    const email = extractEmail(currentResumeText);
    const phone = extractPhone(currentResumeText);
    
    const resWords = currentResumeText.toLowerCase().split(/[\s,.:()\/]+/);
    const jdWords = currentJdText.toLowerCase().split(/[\s,.:()\/]+/);
    
    // Key dictionaries
    const skillsDict = [
      "python", "javascript", "sql", "html", "css", "bash", "c++", "go", "golang", "r", "java", "typescript",
      "react", "vue", "angular", "node.js", "node", "django", "fastapi", "flask", "express", "spring", "laravel",
      "postgresql", "mysql", "redis", "mongodb", "snowflake", "sqlite", "oracle", "cassandra",
      "aws", "gcp", "azure", "docker", "kubernetes", "k8s", "eks", "ecs", "terraform", "ansible", "jenkins", "git",
      "pytorch", "tensorflow", "keras", "scikit-learn", "hugging face", "opencv", "mlflow", "pandas", "numpy", "dbt",
      "agile", "scrum", "jira", "confluence", "product roadmapping", "user stories", "prds", "mixpanel", "tableau"
    ];

    // Find skills in Resume and JD
    const resumeSkillsSet = new Set();
    const jdSkillsSet = new Set();

    skillsDict.forEach(skill => {
      // Check exact presence
      if (currentResumeText.toLowerCase().includes(skill)) {
        resumeSkillsSet.add(skill);
      }
      if (currentJdText.toLowerCase().includes(skill)) {
        jdSkillsSet.add(skill);
      }
    });

    // Match calculations with semantic equivalencies
    const matchingSkills = [];
    const missingSkillsList = [];

    jdSkillsSet.forEach(skill => {
      const exactMatch = resumeSkillsSet.has(skill);
      let synonymMatch = false;
      let matchedSynonym = '';

      if (!exactMatch) {
        // Run semantic synonyms check
        const synonyms = getSynonyms(skill);
        for (let syn of synonyms) {
          if (resumeSkillsSet.has(syn)) {
            synonymMatch = true;
            matchedSynonym = syn;
            break;
          }
        }
      }

      if (exactMatch || synonymMatch) {
        matchingSkills.push({
          skill: capitalizeFirst(skill),
          resumeEvidence: exactMatch ? `Explicitly listed in skills list.` : `Semantic Match: Candidate has background in related system '${capitalizeFirst(matchedSynonym)}'.`,
          jdEvidence: `Explicitly listed as core requirement in target specifications.`,
          match: exactMatch ? 100 : 85
        });
      } else {
        missingSkillsList.push(skill);
      }
    });

    // Categorize missing
    const critical = [];
    const important = [];
    const niceToHave = [];

    missingSkillsList.forEach((skill, idx) => {
      const courses = getRecommendedCourse(skill);
      const detail = {
        skill: capitalizeFirst(skill),
        reason: `Lacks direct matching reference in resume. Required to perform core tasks in the workspace.`,
        courses: courses
      };
      if (idx % 3 === 0) {
        critical.push(detail);
      } else if (idx % 3 === 1) {
        important.push(detail);
      } else {
        niceToHave.push(detail);
      }
    });

    // Keyword density
    const keywordMatches = matchingSkills.map(s => s.skill);
    const keywordMissing = missingSkillsList.map(s => capitalizeFirst(s));
    
    const densityVal = Math.min((keywordMatches.length * 0.8), 6.5).toFixed(1);
    const optScoreVal = Math.round((keywordMatches.length / (jdSkillsSet.size || 1)) * 100);
    const searchVis = optScoreVal >= 80 ? "Outstanding" : optScoreVal >= 60 ? "High" : optScoreVal >= 40 ? "Medium" : "Low";

    // Years of Experience estimate
    const yrsReq = parseYearsRequired(currentJdText);
    const yrsAvail = parseYearsAvailable(currentResumeText);

    // Dynamic Score calculation (Step 4 weights)
    const skillsScore = optScoreVal;
    const expScore = yrsAvail >= yrsReq ? 90 : Math.round((yrsAvail / (yrsReq || 1)) * 90);
    const projectsScore = currentResumeText.toLowerCase().includes('project') ? 85 : 40;
    const eduScore = (currentResumeText.toLowerCase().includes('b.s.') || currentResumeText.toLowerCase().includes('bachelor') || currentResumeText.toLowerCase().includes('m.s.') || currentResumeText.toLowerCase().includes('master')) ? 90 : 50;
    const certsScore = currentResumeText.toLowerCase().includes('certif') ? 80 : 30;
    const toolsScore = Math.round(skillsScore * 0.9);
    const keywordsScore = skillsScore;
    const softScore = 80;

    const overallScore = Math.round(
      (skillsScore * 0.3) + 
      (expScore * 0.25) + 
      (projectsScore * 0.15) + 
      (eduScore * 0.1) + 
      (certsScore * 0.05) + 
      (toolsScore * 0.05) + 
      (keywordsScore * 0.05) + 
      (softScore * 0.05)
    );

    // Build complete programmatic dataset structure
    const parsedData = {
      parsedResume: {
        name: name,
        contact: `${email} | ${phone} | Profile Extracted`,
        summary: currentResumeText.substring(0, 200) + '...',
        links: {
          github: extractLink(currentResumeText, 'github.com'),
          linkedin: extractLink(currentResumeText, 'linkedin.com'),
          portfolio: extractLink(currentResumeText, 'portfolio')
        },
        education: [{ degree: "Computer Science or Related Field", institution: "Not Mentioned", year: "Not Mentioned", gpa: "Not Mentioned" }],
        experience: [{ role: "Software Engineer", company: "Extracted Industry", period: "Timeline Available" }],
        projects: [{ name: "Engineering Portfolio Project" }],
        skills: { languages: keywordMatches.slice(0, 5) }
      },
      analysis: {
        overallScore: overallScore,
        verdict: getVerdictFromScore(overallScore),
        verdictDescription: `The candidate shows an overall ATS match score of ${overallScore}%. We parsed ${keywordMatches.length} matching skills and identified ${keywordMissing.length} missing skill areas. The years of experience available (${yrsAvail} yrs) is compared to the target requirement (${yrsReq} yrs). Recommended check for tech stack gaps before forwarding.`,
        componentScores: {
          skills: skillsScore,
          experience: expScore,
          projects: projectsScore,
          education: eduScore,
          certifications: certsScore,
          tools: toolsScore,
          keywords: keywordsScore,
          softSkills: softScore
        },
        matchingSkills: matchingSkills,
        missingSkills: {
          critical: critical,
          important: important,
          niceToHave: niceToHave
        },
        keywordAnalysis: {
          matched: keywordMatches,
          missing: keywordMissing,
          density: parseFloat(densityVal),
          optimizationScore: optScoreVal,
          searchVisibility: searchVis
        },
        experienceAnalysis: {
          yearsRequired: yrsReq,
          yearsAvailable: yrsAvail,
          relevant: `Candidate has ${yrsAvail} years of professional record. The target role lists a requirement of ${yrsReq} years.`,
          transferable: `Methodologies and tool frameworks are transferable to backend software engineering cycles.`,
          missing: yrsAvail < yrsReq ? `Missing ${yrsReq - yrsAvail} years of experience matching senior screening parameters.` : `None. Years criteria satisfied.`,
          industryFit: `General technology services alignment.`
        },
        projectEvaluation: [
          { name: "Production System Integration", relevance: "Medium-High", tech: keywordMatches.slice(0, 3).join(', ') || "Not Mentioned", impact: "Optimized operational capacity and system uptime.", innovation: "Refactored processing schemas.", similarity: 75, score: 75 }
        ],
        educationAnalysis: {
          degreeRelevance: "Matches target standard fields (STEM or Product Management).",
          cgpaRelevance: "Not Mentioned",
          courseRelevance: "Core concepts of software engineering and analytics.",
          mastersPreference: "Not Mentioned"
        },
        certificationAnalysis: {
          relevant: currentResumeText.toLowerCase().includes('certif') ? [{ name: "Professional Industry Certification", value: "Validates core domains." }] : [],
          missing: [{ name: "Core Technical Certification", value: "Recommended to validate tool skills." }],
          recommended: [{ name: "Advanced Domain Certification", value: "High value for platform developers." }]
        },
        heatmap: {
          programming: keywordMatches.some(s => ["python", "javascript", "go", "java"].includes(s.toLowerCase())) ? 85 : 40,
          ml: keywordMatches.some(s => ["pytorch", "tensorflow", "mlflow"].includes(s.toLowerCase())) ? 80 : 10,
          ai: keywordMatches.some(s => ["pytorch", "tensorflow", "nlp", "ai"].includes(s.toLowerCase())) ? 80 : 10,
          cloud: keywordMatches.some(s => ["aws", "gcp", "azure"].includes(s.toLowerCase())) ? 85 : 20,
          databases: keywordMatches.some(s => ["postgresql", "mysql", "mongodb"].includes(s.toLowerCase())) ? 85 : 20,
          devops: keywordMatches.some(s => ["docker", "kubernetes", "terraform"].includes(s.toLowerCase())) ? 80 : 25,
          frontend: keywordMatches.some(s => ["react", "vue", "angular", "html"].includes(s.toLowerCase())) ? 85 : 20,
          backend: keywordMatches.some(s => ["node.js", "django", "fastapi", "express"].includes(s.toLowerCase())) ? 90 : 30,
          dataEngineering: keywordMatches.some(s => ["snowflake", "dbt", "pandas"].includes(s.toLowerCase())) ? 75 : 15,
          visualization: keywordMatches.some(s => ["tableau", "excel"].includes(s.toLowerCase())) ? 70 : 15
        },
        softSkillAnalysis: {
          communication: { rating: 80, evidence: "Technical descriptions and documentation references." },
          leadership: { rating: 75, evidence: "Collaboration notes and project lead roles." },
          problemSolving: { rating: 85, evidence: "System resolutions and logic optimizations." },
          teamwork: { rating: 80, evidence: "Collaborative development and Agile standups." },
          ownership: { rating: 80, evidence: "Independent feature tracking." },
          adaptability: { rating: 75, evidence: "Versatile project stack changes." },
          analyticalThinking: { rating: 82, evidence: "Diagnostic monitoring and metrics evaluations." },
          recruiterConfidence: overallScore >= 75 ? "High" : "Moderate"
        },
        strengths: [
          `Satisfies key technical requirements like ${keywordMatches.slice(0, 3).join(', ') || 'basic programming languages'}.`,
          `Meets core education requirements for modern software and technical development roles.`
        ],
        weaknesses: [
          `Lacks explicit documentation for key skills: ${keywordMissing.slice(0, 3).join(', ') || 'No critical weaknesses identified'}.`,
          yrsAvail < yrsReq ? `Under-qualified by years of experience (${yrsAvail} yrs vs ${yrsReq} yrs required).` : `Fewer platform specialization credentials than preferred.`
        ],
        riskAssessment: {
          level: overallScore >= 80 ? "Low" : overallScore >= 60 ? "Medium" : "High",
          explanation: `Score filters suggest the candidate has minor to major gaps in tool stack alignment and years requirement.`
        },
        interviewProbability: {
          phoneScreen: Math.min(overallScore + 10, 95),
          technicalRound: Math.max(overallScore - 10, 20),
          finalRound: Math.max(overallScore - 15, 10),
          offerProbability: Math.max(overallScore - 25, 5),
          assumptions: "Assumes passing score on standard initial coding assessment. Standard hiring funnel parameters apply."
        },
        improvementRoadmap: {
          high: [
            { item: "Incorporate Missing Keywords", description: `Add missing terms like ${keywordMissing.slice(0, 2).join(', ')} into summary or projects.` }
          ],
          medium: [
            { item: "Focus experience achievements", description: "Use quantified STAR achievements to showcase scaling accomplishments." }
          ],
          low: [
            { item: "Add Cloud Projects", description: "Incorporate small cloud hosting demonstrations to show deployment maturity." }
          ]
        },
        bulletImprovements: [
          { original: "Worked on software developer tasks.", improved: "Developed and optimized modular web modules, reducing browser render cycles by 24% and maintaining stable REST APIs.", impact: "Reduced render cycles by 24%." }
        ],
        missingActionVerbs: ["Architected", "Engineered", "Optimized", "Decoupled", "Streamlined"],
        suggestedJobRoles: {
          bestFit: [overallScore >= 70 ? "Software Engineer" : "Associate Engineer"],
          goodFit: ["Junior DevOps Engineer", "QA Automation Developer"],
          stretchRoles: ["Senior Engineer"],
          notRecommended: ["Data Architect", "Embedded Specialist"]
        },
        learningRoadmap: {
          thirtyDays: { title: "Primary Tools & Syntax", items: [`Review core structures for ${keywordMissing.slice(0, 2).join(', ') || 'languages'}.`] },
          sixtyDays: { title: "Framework Integration", items: ["Implement localized projects to link front and backend schemas."] },
          ninetyDays: { title: "Cloud & Devops Systems", items: ["Study Docker container configurations for API packaging."] },
          oneEightyDays: { title: "Advanced Architecture", items: ["Read distributed backend papers and system design case studies."] }
        },
        recruiterFeedback: `The applicant presents a baseline score of ${overallScore}%. They satisfy primary syntax parameters but should be audited on critical keywords: ${keywordMissing.slice(0, 3).join(', ')}. Recommend a standard tech screening.`
      }
    };

    window.mockData['custom'] = parsedData;
    renderPresetReport('custom');
  }

  // Helper text parsing utilities
  function extractName(text) {
    if (!text) return "Candidate Name";
    const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    // Usually name is the first line
    return lines[0] ? lines[0].substring(0, 40) : "Candidate Name";
  }

  function extractEmail(text) {
    if (!text) return "Not Mentioned";
    const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
    return match ? match[0] : "Not Mentioned";
  }

  function extractPhone(text) {
    if (!text) return "Not Mentioned";
    const match = text.match(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);
    return match ? match[0] : "Not Mentioned";
  }

  function extractLink(text, domain) {
    if (!text) return "Not Mentioned";
    const regex = new RegExp(`[a-zA-Z0-9.-]*${domain}[a-zA-Z0-9./-]*`, 'i');
    const match = text.match(regex);
    return match ? match[0] : "Not Mentioned";
  }

  function parseYearsRequired(jd) {
    const match = jd.match(/(\d+)\+?\s*(?:years|yrs)/i);
    return match ? parseInt(match[1]) : 3; // Default to 3
  }

  function parseYearsAvailable(resume) {
    const match = resume.match(/(\d+)\+?\s*(?:years|yrs)/i);
    return match ? parseInt(match[1]) : 4; // Default to 4
  }

  function getVerdictFromScore(score) {
    if (score >= 90) return "Excellent Match";
    if (score >= 80) return "Strong Match";
    if (score >= 70) return "Good Match";
    if (score >= 60) return "Moderate Match";
    if (score >= 50) return "Weak Match";
    return "Poor Match";
  }

  function getRiskColorClass(level) {
    if (level.toLowerCase().includes('low')) return 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded';
    if (level.toLowerCase().includes('medium')) return 'text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded';
    return 'text-rose-400 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded';
  }

  function getHeatmapColorClass(val) {
    if (val >= 80) return 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20 shadow-emerald-500/5';
    if (val >= 50) return 'bg-indigo-950/40 text-indigo-400 border-indigo-500/20 shadow-indigo-500/5';
    if (val >= 25) return 'bg-slate-900 text-slate-400 border-slate-800';
    return 'bg-slate-950 text-slate-600 border-slate-900';
  }

  function getSynonyms(skill) {
    const synDict = {
      'pytorch': ['deep learning', 'neural networks', 'machine learning', 'ai', 'tensorflow'],
      'tensorflow': ['deep learning', 'neural networks', 'machine learning', 'ai', 'pytorch'],
      'react': ['react.js', 'vue', 'angular', 'frontend', 'javascript'],
      'kubernetes': ['eks', 'k8s', 'docker', 'containerization', 'orchestration'],
      'docker': ['containerization', 'ecs', 'kubernetes', 'k8s'],
      'aws': ['cloud', 'gcp', 'azure', 'sagemaker', 'ecs', 's3'],
      'postgresql': ['sql', 'postgres', 'relational', 'databases', 'mysql'],
      'fastapi': ['django', 'flask', 'apis', 'rest', 'python'],
      'django': ['fastapi', 'flask', 'apis', 'rest', 'python'],
      'git': ['github', 'version control', 'ci/cd']
    };
    return synDict[skill.toLowerCase()] || [];
  }

  function getRecommendedCourse(skill) {
    const courseDict = {
      'kubernetes': 'Certified Kubernetes Administrator (CKA)',
      'aws': 'AWS Cloud Practitioner Essentials',
      'pytorch': 'Deep Learning Specialization (DeepLearning.AI)',
      'tensorflow': 'TensorFlow Developer Certificate',
      'react': 'React - The Complete Guide (Udemy)',
      'docker': 'Docker & Kubernetes: Complete Guide',
      'postgresql': 'SQL Bootcamp by Jose Portilla',
      'fastapi': 'FastAPI Complete Course',
      'go': 'Go: The Complete Developer\'s Guide',
      'snowflake': 'Snowflake Essentials',
      'dbt': 'dbt Fundamentals'
    };
    return courseDict[skill.toLowerCase()] || `Complete Guide to ${capitalizeFirst(skill)}`;
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Update overall score colors
  function updateScoreColors(score) {
    const circle = document.getElementById('scoreCircle');
    const badge = document.getElementById('verdictBadge');
    
    // Reset colors
    circle.classList.remove('text-emerald-500', 'text-amber-500', 'text-orange-500', 'text-rose-500');
    badge.className = 'mt-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ';
    
    if (score >= 90) {
      circle.classList.add('text-emerald-500');
      badge.classList.add('bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-400');
      badge.textContent = 'Excellent Match';
    } else if (score >= 80) {
      circle.classList.add('text-emerald-500');
      badge.classList.add('bg-emerald-500/10', 'border-emerald-500/30', 'text-emerald-400');
      badge.textContent = 'Strong Match';
    } else if (score >= 70) {
      circle.classList.add('text-amber-500');
      badge.classList.add('bg-amber-500/10', 'border-amber-500/30', 'text-amber-400');
      badge.textContent = 'Good Match';
    } else if (score >= 60) {
      circle.classList.add('text-orange-500');
      badge.classList.add('bg-orange-500/10', 'border-orange-500/30', 'text-orange-400');
      badge.textContent = 'Moderate Match';
    } else if (score >= 50) {
      circle.classList.add('text-orange-500');
      badge.classList.add('bg-orange-500/10', 'border-orange-500/30', 'text-orange-400');
      badge.textContent = 'Weak Match';
    } else {
      circle.classList.add('text-rose-500');
      badge.classList.add('bg-rose-500/10', 'border-rose-500/30', 'text-rose-400');
      badge.textContent = 'Poor Match';
    }
  }

  // Update progress bars widths
  function updateProgressBars(scores) {
    const components = [
      { id: 'Skills', key: 'skills' },
      { id: 'Experience', key: 'experience' },
      { id: 'Projects', key: 'projects' },
      { id: 'Education', key: 'education' },
      { id: 'Certifications', key: 'certifications' },
      { id: 'Tools', key: 'tools' },
      { id: 'Keywords', key: 'keywords' },
      { id: 'SoftSkills', key: 'softSkills' }
    ];

    components.forEach(comp => {
      const val = scores[comp.key] || 0;
      document.getElementById(`scoreVal${comp.id}`).textContent = `${val}%`;
      document.getElementById(`bar${comp.id}`).style.width = `${val}%`;
    });
  }

  // Tab buttons click action
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all
      tabButtons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.add('hidden'));
      
      // Activate clicked
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      document.getElementById(targetId).classList.remove('hidden');
    });
  });

  // Modal actions
  btnEditText.addEventListener('click', () => {
    modalResumeText.value = currentResumeText;
    modalJdText.value = currentJdText;
    editTextModal.classList.remove('hidden');
  });

  btnCloseModal.addEventListener('click', () => editTextModal.classList.add('hidden'));
  btnCancelModal.addEventListener('click', () => editTextModal.classList.add('hidden'));

  btnSaveModal.addEventListener('click', () => {
    currentResumeText = modalResumeText.value;
    currentJdText = modalJdText.value;
    jdInput.value = currentJdText;
    document.getElementById('jdCharCount').textContent = `${currentJdText.length} chars`;
    editTextModal.classList.add('hidden');
    triggerAnalysis(false);
  });

  // Action to export/print
  btnExportPdf.addEventListener('click', () => {
    window.print();
  });

  // Interactive Bullet rewrite logic
  btnRewriteBullet.addEventListener('click', () => {
    const val = customBulletInput.value.trim();
    if (!val) return;
    
    // Simulate bullet rewording algorithm
    let rewritten = '';
    let impact = '';

    if (val.toLowerCase().includes('model') || val.toLowerCase().includes('ml') || val.toLowerCase().includes('ai')) {
      rewritten = "Developed an XGBoost machine learning model achieving 94.2% prediction accuracy on 15,000 active records, cutting execution latency by 18%.";
      impact = "Boosted accuracy to 94.2% and cut system latency by 18%.";
    } else if (val.toLowerCase().includes('code') || val.toLowerCase().includes('built') || val.toLowerCase().includes('website') || val.toLowerCase().includes('app')) {
      rewritten = "Architected a scalable responsive web application in React and PostgreSQL, driving a 28% increase in registration conversion rates and processing $15k in transaction flows.";
      impact = "Raised conversions by 28% and supported secure payment scaling.";
    } else if (val.toLowerCase().includes('database') || val.toLowerCase().includes('query') || val.toLowerCase().includes('sql')) {
      rewritten = "Refactored legacy PostgreSQL queries and indexes, decreasing load latencies by 35% and saving $8,000/year in cloud instance resources.";
      impact = "Slashed DB latency by 35% and reduced scaling fees by $8k.";
    } else {
      rewritten = `Engineered a customized optimization routine using industry standard schemas, improving operational workflow efficiency by 22% and reducing error frequencies.`;
      impact = "Improved process efficiency by 22%.";
    }

    const resultBox = document.getElementById('customBulletResult');
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = `
      <div class="flex flex-col gap-2">
        <div>
          <span class="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Original Input</span>
          <p class="text-xs text-slate-400 line-through">"${val}"</p>
        </div>
        <div>
          <span class="text-[9px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1"><i data-lucide="sparkles" class="w-3 h-3"></i> Converted STAR Statement</span>
          <p class="text-xs text-slate-200 font-semibold bg-slate-950 p-2.5 rounded-lg border border-slate-850">"${rewritten}"</p>
        </div>
        <div class="text-[9px] text-slate-500">
          <strong>Quantified Impact:</strong> <span class="text-indigo-300 font-semibold">${impact}</span>
        </div>
      </div>
    `;
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });
}

// Global action verb insertion helper
window.insertActionVerb = function(verb) {
  const customBulletInput = document.getElementById('customBulletInput');
  customBulletInput.value = `${verb} ` + customBulletInput.value;
  customBulletInput.focus();
};
