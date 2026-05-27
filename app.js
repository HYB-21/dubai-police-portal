document.addEventListener("DOMContentLoaded", () => {

    // --- NOTICE MODAL WINDOW CONTROLLERS ---
    const modal = document.getElementById('system-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    function launchNotice(title, htmlContent) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = 'flex';
    }
    if (closeModal) {
        closeModal.addEventListener('click', () => modal.style.display = 'none');
    }

    // --- FORMAL ADVISORY TRIGGER PLATFORMS ---
    document.getElementById('global-sos').addEventListener('click', () => {
        launchNotice("EMERGENCY PROTOCOL ACTIVATED", "An emergency dispatch signal has been transmitted to the Command and Control Center. Your live GPS coordinates and telemetry lines are now broadcast directly to nearby patrol responders.");
    });
    document.getElementById('report-sos').addEventListener('click', () => {
        launchNotice("EMERGENCY PROTOCOL ACTIVATED", "An emergency dispatch signal has been transmitted to the Command and Control Center. Your live GPS coordinates and telemetry lines are now broadcast directly to nearby patrol responders.");
    });
    document.getElementById('uae-pass-login-btn').addEventListener('click', () => {
        launchNotice("UAE PASS Portal Redirect", "Redirecting to the official secure UAE PASS identity verification framework...");
    });
    document.getElementById('visitor-link').addEventListener('click', (e) => {
        e.preventDefault();
        launchNotice("Account Registration", "Initializing credential setup forms for non-resident profile generation arrays.");
    });
    document.getElementById('profile-btn').addEventListener('click', () => {
        launchNotice("User Profile Context", "Identity Status: Unverified Profile. Please synchronize your device with UAE PASS credentials to verify active status records.");
    });

    // DASHBOARD PORTAL ACTION REDIRECTIONS
    document.getElementById('action-permit').addEventListener('click', () => {
        launchNotice("Permit/Certificate Processing", "Accessing document applications databases. Identity validation via UAE PASS required to process active certificates.");
    });
    document.getElementById('action-pay').addEventListener('click', () => {
        launchNotice("Fines Database Inquiry", "Connecting to traffic violations central log. Enter identification plates on the resulting prompt.");
    });
    document.getElementById('action-support').addEventListener('click', () => {
        launchNotice("Smart Support Services", "Opening non-emergency utility assistance directory. For immediate danger scenarios, please tap the SOS console icon.");
    });
    document.getElementById('action-explore').addEventListener('click', () => {
        launchNotice("Services Index Directory", "Querying total database services index modules...");
    });
    document.getElementById('action-dashboard').addEventListener('click', () => {
        launchNotice("Secure User Dashboard", "No active profile context detected. Authenticate identity variables to open custom statement records.");
    });

    // LIST VIEW INDEX ROW CLICK LISTENERS
    document.getElementById('row-fine-pay').addEventListener('click', () => {
        launchNotice("Traffic Violations Module", "Accessing fine registers to calculate citation adjustments.");
    });
    document.getElementById('row-clearance').addEventListener('click', () => {
        launchNotice("Police Clearance Portal", "Accessing background status registry records.");
    });
    document.getElementById('row-accident').addEventListener('click', () => {
        resetWizardState(); 
        switchViewportTab(screenReport, null);
    });
    document.getElementById('row-status').addEventListener('click', () => {
        launchNotice("Application Tracking Desk", "Checking active review queue configurations.");
    });

    // --- MATHEMATICALLY FAULTLESS TRACKING PILL CONTROLLER ---
    const screenHome = document.getElementById('screen-home');
    const screenReport = document.getElementById('screen-report');
    const screenAix = document.getElementById('screen-aix');

    const navHome = document.getElementById('nav-home');
    const navAix = document.getElementById('nav-aix');
    const navContact = document.getElementById('nav-contact');
    const navSearch = document.getElementById('nav-search');
    const liquidGlassSlider = document.getElementById('liquid-glass-slider');

    // Computes exact structural width boxes and applies perfect alignment offsets
    function alignPillToTarget(targetElement) {
        if (!targetElement || !liquidGlassSlider) return;
        
        // Target positioning parent track context bounding limits
        const parentDock = targetElement.parentElement;
        const dockBounds = parentDock.getBoundingClientRect();
        const targetBounds = targetElement.getBoundingClientRect();
        
        // Exact horizontal offset calculated cleanly relative to the container dock element
        const exactLeftOffset = targetBounds.left - dockBounds.left;
        
        // Lock dynamic styling variables inside layout calculations
        liquidGlassSlider.style.width = `${targetBounds.width}px`;
        liquidGlassSlider.style.transform = `translateX(${exactLeftOffset}px)`;
        liquidGlassSlider.style.display = "block";
    }

    function switchViewportTab(screenNode, navigationTabNode) {
        // Drop view states instantly
        screenHome.style.display = 'none';
        screenReport.style.display = 'none';
        screenAix.style.display = 'none';
        
        navHome.classList.remove('active');
        navAix.classList.remove('active');
        navContact.classList.remove('active');
        navSearch.classList.remove('active');

        screenNode.style.display = 'block';
        
        if (navigationTabNode) {
            navigationTabNode.classList.add('active');
            alignPillToTarget(navigationTabNode);
        } else {
            // Drop slider visualization when custom out-of-bounds screen states bypass tab keys
            liquidGlassSlider.style.display = "none";
        }
    }

    // Connect Navigation Click Listeners
    document.getElementById('action-make-report').addEventListener('click', () => { resetWizardState(); switchViewportTab(screenReport, null); });
    document.getElementById('back-to-home').addEventListener('click', () => switchViewportTab(screenHome, navHome));
    
    navHome.addEventListener('click', () => switchViewportTab(screenHome, navHome));
    navAix.addEventListener('click', () => switchViewportTab(screenAix, navAix));
    
    navContact.addEventListener('click', () => {
        switchViewportTab(screenHome, navContact);
        setTimeout(() => launchNotice("Contact Center Directory", "<b>Emergency Hotline:</b> 999<br><b>Non-Emergency Support Line:</b> 901<br><br>Operators are standing by around the clock to log incoming safety logs directly into local dispatch queues."), 150);
    });
    
    navSearch.addEventListener('click', () => {
        switchViewportTab(screenHome, navSearch);
        setTimeout(() => launchNotice("Global Platform Search", "Type query statements below to quickly route to specialized filing categories or administrative documents index arrays."), 150);
    });

    // Execute first calculation on initial script startup cycle to set Home active tracking positions
    setTimeout(() => { alignPillToTarget(navHome); }, 150);

    // --- COMPLAINTS PROCESSING ENGINE WORKSPACE ---
    const reportMenuList = document.getElementById('report-menu-list');
    const dynamicFormWizard = document.getElementById('dynamic-form-wizard');
    const wizardFormTitle = document.getElementById('wizard-form-title');
    const btnCancelWizard = document.getElementById('btn-cancel-wizard');
    const btnSubmitWizard = document.getElementById('btn-submit-wizard');

    const inputLocation = document.getElementById('wiz-location');
    const inputDate = document.getElementById('wiz-date');
    const inputDesc = document.getElementById('wiz-desc');

    let currentSelectedReportType = "";

    document.querySelectorAll('#report-menu-list .report-item').forEach(card => {
        card.addEventListener('click', () => {
            currentSelectedReportType = card.getAttribute('data-report');
            reportMenuList.style.display = 'none';
            dynamicFormWizard.style.display = 'block';
            wizardFormTitle.innerText = `New Report: ${currentSelectedReportType}`;
            
            const now = new Date();
            now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
            inputDate.value = now.toISOString().slice(0,16);
            inputLocation.value = "";
            inputDesc.value = "";
        });
    });

    function resetWizardState() {
        dynamicFormWizard.style.display = 'none';
        reportMenuList.style.display = 'block';
        currentSelectedReportType = "";
    }

    btnCancelWizard.addEventListener('click', resetWizardState);

    btnSubmitWizard.addEventListener('click', () => {
        const locVal = inputLocation.value.trim();
        const dateVal = inputDate.value;
        const descVal = inputDesc.value.trim();

        if (!locVal || !dateVal || !descVal) {
            launchNotice("Required Fields Missing", "All confirmation entry fields must be fully populated before committing record data blocks to system databases.");
            return;
        }

        const caseId = "DXB-PR-" + Math.floor(100000 + Math.random() * 900000);
        
        launchNotice(
            "Report Transmitted Securely", 
            `Your report files have been successfully captured and indexed inside the primary police registry systems.<br><br>` +
            `<b>Reference Case ID:</b> ${caseId}<br>` +
            `<b>Classification Logged:</b> ${currentSelectedReportType}<br><br>` +
            `An officer will review your description files promptly. Monitor updates from your account dashboard.`
        );

        resetWizardState();
        switchViewportTab(screenHome, navHome);
    });

    // --- FORMAL AIX SECURE AUTOMATION PLATFORM ---
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const btnSendChat = document.getElementById('btn-send-chat');

    document.getElementById('chat-reset').addEventListener('click', () => {
        chatBox.innerHTML = '<div class="system-chat-start-date">Session Cleared Securely</div><div class="msg bot">Welcome to the AiX Smart Support console. Please describe the issue or service query you require, and I will assist you with reporting paths or official information.</div>';
    });

    btnSendChat.addEventListener('click', executeProcessAIEngine);
    chatInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') executeProcessAIEngine(); });

    const AI_SYSTEM_KNOWLEDGE_BASE = [
        { triggers: ['hello', 'hi', 'help', 'enquiry', 'aix'], reply: "Welcome to the AiX automated assistant portal. You can enquire about traffic fines, police clearance logs, or request navigation instructions to your nearest Smart Police Station (SPS) node." },
        { triggers: ['fine', 'pay', 'ticket', 'violation'], reply: "<b>Traffic Violations Processing:</b> Traffic penalties can be reviewed and cleared via our payment systems. Select the **Inquire & Pay** shortcut button from the main screen to query active parameters." },
        { triggers: ['accident', 'crash', 'car', 'collision'], reply: "<b>Accident Protocol:</b> If you have sustained a minor non-injury vehicle collision, exit your vehicle safely and access the **Make a Report** module. Selecting **Traffic Accident Reports** will route you to standard reporting configurations." },
        { triggers: ['crime', 'fraud', 'theft', 'ecrime'], reply: "<b>Criminal Incident Intake:</b> Non-emergency criminal instances can be initiated via the **Make a Report** panel. For identity theft, hacking, or electronic financial fraud parameters, select the **Reporting E-Crime** pathway." },
        { triggers: ['sps', 'station', 'location', 'where'], reply: "<b>Smart Police Station (SPS):</b> Unmanned walk-in service hubs are open 24 hours a day. Use the **Locate Nearby Service Spots** card view on the home screen to map routes to the nearest physical kiosk node." }
    ];

    function executeProcessAIEngine() {
        const textInputText = chatInput.value.trim();
        if (!textInputText) return;

        postMessageBubble(textInputText, 'user');
        chatInput.value = '';

        const tempNodeId = "aix-compute-node";
        const loaderNode = document.createElement('div');
        loaderNode.classList.add('msg', 'bot');
        loaderNode.id = tempNodeId;
        loaderNode.innerText = "Processing system knowledge registers...";
        chatBox.appendChild(loaderNode);
        chatBox.scrollTop = chatBox.scrollHeight;

        setTimeout(() => {
            const genericFallbackText = `Your inquiry ["${textInputText}"] has been logged into our processing systems. To log an official request layer immediately, select an appropriate tool module from the main home layout screen or contact our operators directly via line 901.`;
            let resolvedEngineOutputText = null;

            for (const row of AI_SYSTEM_KNOWLEDGE_BASE) {
                if (row.triggers.some(k => textInputText.toLowerCase().includes(k))) {
                    resolvedEngineOutputText = row.reply;
                    break;
                }
            }

            const currentLoaderNode = document.getElementById(tempNodeId);
            if (currentLoaderNode) currentLoaderNode.remove();

            postMessageBubble(resolvedEngineOutputText || genericFallbackText, 'bot');
        }, 400);
    }

    function postMessageBubble(txt, role) {
        const structuralElement = document.createElement('div');
        structuralElement.classList.add('msg', role);
        structuralElement.innerHTML = txt;
        chatBox.appendChild(structuralElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
