// ============================================================
// ASTRA QR GENERATOR - COMPLETE SCRIPT WITH SMART FIELDS
// ============================================================

(function() {
    'use strict';

    // ============================================================
    // QR TYPE CONFIGURATIONS WITH SMART FIELDS
    // ============================================================

    const qrTypeConfig = {
        // Website & Links
        'url': {
            label: 'Website URL',
            icon: 'fa-globe',
            fields: [
                { id: 'websiteUrl', label: 'Website URL', type: 'url', placeholder: 'https://example.com', required: true }
            ],
            build: (data) => data.websiteUrl
        },
        'blog': {
            label: 'Blog URL',
            icon: 'fa-blog',
            fields: [
                { id: 'blogUrl', label: 'Blog URL', type: 'url', placeholder: 'https://example.com/blog', required: true }
            ],
            build: (data) => data.blogUrl
        },
        'youtube': {
            label: 'YouTube',
            icon: 'fa-youtube',
            fields: [
                { id: 'youtubeUrl', label: 'YouTube URL', type: 'url', placeholder: 'https://youtube.com/@channel', required: true }
            ],
            build: (data) => data.youtubeUrl
        },
        'whatsapp': {
            label: 'WhatsApp Chat',
            icon: 'fa-whatsapp',
            fields: [
                { id: 'whatsappNumber', label: 'Phone Number', type: 'tel', placeholder: '919999999999', required: true, prefix: '+91' },
                { id: 'whatsappMessage', label: 'Pre-filled Message (Optional)', type: 'text', placeholder: 'Hello! How can I help you?' }
            ],
            build: (data) => {
                let url = `https://wa.me/${data.whatsappNumber.replace(/[^0-9]/g, '')}`;
                if (data.whatsappMessage) url += `?text=${encodeURIComponent(data.whatsappMessage)}`;
                return url;
            }
        },
        'telegram': {
            label: 'Telegram Channel',
            icon: 'fa-telegram',
            fields: [
                { id: 'telegramUsername', label: 'Channel/Group Username', type: 'text', placeholder: 'channelname', required: true, prefix: '@' }
            ],
            build: (data) => `https://t.me/${data.telegramUsername.replace('@', '')}`
        },
        'googlemaps': {
            label: 'Google Maps Location',
            icon: 'fa-location-dot',
            fields: [
                { id: 'mapsPlace', label: 'Place Name or Address', type: 'text', placeholder: 'Times Square, New York', required: true }
            ],
            build: (data) => `https://maps.google.com/?q=${encodeURIComponent(data.mapsPlace)}`
        },
        'googleform': {
            label: 'Google Form',
            icon: 'fa-google',
            fields: [
                { id: 'formUrl', label: 'Google Form URL', type: 'url', placeholder: 'https://forms.gle/xxxxxx', required: true }
            ],
            build: (data) => data.formUrl
        },

        // Social Media
        'instagram': {
            label: 'Instagram Profile',
            icon: 'fa-instagram',
            fields: [
                { id: 'instagramUsername', label: 'Instagram Username', type: 'text', placeholder: 'username', required: true, prefix: '@' }
            ],
            build: (data) => `https://instagram.com/${data.instagramUsername.replace('@', '')}`
        },
        'facebook': {
            label: 'Facebook Page',
            icon: 'fa-facebook',
            fields: [
                { id: 'facebookPage', label: 'Facebook Page Name/ID', type: 'text', placeholder: 'pagename', required: true }
            ],
            build: (data) => `https://facebook.com/${data.facebookPage}`
        },
        'linkedin': {
            label: 'LinkedIn Profile',
            icon: 'fa-linkedin',
            fields: [
                { id: 'linkedinUsername', label: 'LinkedIn Username', type: 'text', placeholder: 'username', required: true }
            ],
            build: (data) => `https://linkedin.com/in/${data.linkedinUsername}`
        },
        'twitter': {
            label: 'X (Twitter) Profile',
            icon: 'fa-x-twitter',
            fields: [
                { id: 'twitterUsername', label: 'X/Twitter Username', type: 'text', placeholder: 'username', required: true, prefix: '@' }
            ],
            build: (data) => `https://x.com/${data.twitterUsername.replace('@', '')}`
        },
        'github': {
            label: 'GitHub Profile',
            icon: 'fa-github',
            fields: [
                { id: 'githubUsername', label: 'GitHub Username', type: 'text', placeholder: 'username', required: true }
            ],
            build: (data) => `https://github.com/${data.githubUsername}`
        },

        // Contact
        'vcard': {
            label: 'vCard (Full Contact)',
            icon: 'fa-address-card',
            fields: [
                { id: 'vcardName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'vcardEmail', label: 'Email', type: 'email', placeholder: 'john@email.com' },
                { id: 'vcardPhone', label: 'Phone Number', type: 'tel', placeholder: '919999999999' },
                { id: 'vcardCompany', label: 'Company', type: 'text', placeholder: 'Astra Technology' },
                { id: 'vcardTitle', label: 'Job Title', type: 'text', placeholder: 'CEO' },
                { id: 'vcardWebsite', label: 'Website', type: 'url', placeholder: 'https://example.com' }
            ],
            build: (data) => {
                let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${data.vcardName || ''}\n`;
                if (data.vcardEmail) vcard += `EMAIL:${data.vcardEmail}\n`;
                if (data.vcardPhone) vcard += `TEL:${data.vcardPhone}\n`;
                if (data.vcardCompany) vcard += `ORG:${data.vcardCompany}\n`;
                if (data.vcardTitle) vcard += `TITLE:${data.vcardTitle}\n`;
                if (data.vcardWebsite) vcard += `URL:${data.vcardWebsite}\n`;
                vcard += 'END:VCARD';
                return vcard;
            }
        },
        'namephone': {
            label: 'Name + Phone',
            icon: 'fa-user',
            fields: [
                { id: 'npName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'npPhone', label: 'Phone Number', type: 'tel', placeholder: '919999999999', required: true }
            ],
            build: (data) => `TEL:${data.npPhone}\nFN:${data.npName}`
        },
        'email': {
            label: 'Email Address',
            icon: 'fa-envelope',
            fields: [
                { id: 'emailAddress', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true }
            ],
            build: (data) => `mailto:${data.emailAddress}`
        },
        'company': {
            label: 'Company Details',
            icon: 'fa-building',
            fields: [
                { id: 'compName', label: 'Company Name', type: 'text', placeholder: 'Astra Technology', required: true },
                { id: 'compWebsite', label: 'Company Website', type: 'url', placeholder: 'https://example.com' },
                { id: 'compEmail', label: 'Company Email', type: 'email', placeholder: 'info@example.com' },
                { id: 'compPhone', label: 'Company Phone', type: 'tel', placeholder: '919999999999' }
            ],
            build: (data) => {
                let details = `${data.compName || ''}`;
                if (data.compWebsite) details += `\nWebsite: ${data.compWebsite}`;
                if (data.compEmail) details += `\nEmail: ${data.compEmail}`;
                if (data.compPhone) details += `\nPhone: ${data.compPhone}`;
                return details;
            }
        },

        // Communication
        'phonecall': {
            label: 'Phone Call',
            icon: 'fa-phone',
            fields: [
                { id: 'callNumber', label: 'Phone Number', type: 'tel', placeholder: '919999999999', required: true }
            ],
            build: (data) => `tel:${data.callNumber}`
        },
        'sms': {
            label: 'SMS',
            icon: 'fa-sms',
            fields: [
                { id: 'smsNumber', label: 'Phone Number', type: 'tel', placeholder: '919999999999', required: true },
                { id: 'smsMessage', label: 'Pre-filled Message', type: 'text', placeholder: 'Hello!' }
            ],
            build: (data) => {
                let url = `sms:${data.smsNumber}`;
                if (data.smsMessage) url += `?body=${encodeURIComponent(data.smsMessage)}`;
                return url;
            }
        },
        'emailmsg': {
            label: 'Email',
            icon: 'fa-envelope',
            fields: [
                { id: 'emailTo', label: 'To Email', type: 'email', placeholder: 'john@example.com', required: true },
                { id: 'emailSubject', label: 'Subject', type: 'text', placeholder: 'Hello!' },
                { id: 'emailBody', label: 'Body', type: 'textarea', placeholder: 'Your message here...' }
            ],
            build: (data) => {
                let url = `mailto:${data.emailTo}`;
                const params = [];
                if (data.emailSubject) params.push(`subject=${encodeURIComponent(data.emailSubject)}`);
                if (data.emailBody) params.push(`body=${encodeURIComponent(data.emailBody)}`);
                if (params.length) url += `?${params.join('&')}`;
                return url;
            }
        },
        'whatsappmsg': {
            label: 'WhatsApp Message',
            icon: 'fa-whatsapp',
            fields: [
                { id: 'waNumber', label: 'Phone Number', type: 'tel', placeholder: '919999999999', required: true },
                { id: 'waMessage', label: 'Message', type: 'textarea', placeholder: 'Hello! How can I help you?', required: true }
            ],
            build: (data) => `https://wa.me/${data.waNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(data.waMessage)}`
        },

        // Network
        'wifi': {
            label: 'Wi-Fi Network',
            icon: 'fa-wifi',
            fields: [
                { id: 'wifiSsid', label: 'Network Name (SSID)', type: 'text', placeholder: 'MyWiFi', required: true },
                { id: 'wifiPassword', label: 'Password', type: 'password', placeholder: '••••••••', required: true },
                { id: 'wifiSecurity', label: 'Security Type', type: 'select', options: ['WPA2', 'WPA', 'WEP', 'nopass'], default: 'WPA2' }
            ],
            build: (data) => {
                const security = data.wifiSecurity || 'WPA2';
                const password = data.wifiPassword || '';
                if (security === 'nopass') {
                    return `WIFI:T:nopass;S:${data.wifiSsid};;`;
                }
                return `WIFI:T:${security};S:${data.wifiSsid};P:${password};;`;
            }
        },

        // Payments
        'upi': {
            label: 'UPI Payment',
            icon: 'fa-credit-card',
            fields: [
                { id: 'upiId', label: 'UPI ID', type: 'text', placeholder: 'example@upi', required: true },
                { id: 'upiName', label: 'Payee Name', type: 'text', placeholder: 'John Doe' },
                { id: 'upiAmount', label: 'Amount (₹)', type: 'number', placeholder: '100' }
            ],
            build: (data) => {
                let url = `upi://pay?pa=${data.upiId}`;
                if (data.upiName) url += `&pn=${encodeURIComponent(data.upiName)}`;
                if (data.upiAmount) url += `&am=${data.upiAmount}`;
                return url;
            }
        },
        'phonepe': {
            label: 'PhonePe',
            icon: 'fa-phone',
            fields: [
                { id: 'ppId', label: 'PhonePe ID', type: 'text', placeholder: 'example@phonepe', required: true },
                { id: 'ppAmount', label: 'Amount (₹)', type: 'number', placeholder: '100' }
            ],
            build: (data) => {
                let url = `phonepe://pay?pa=${data.ppId}`;
                if (data.ppAmount) url += `&am=${data.ppAmount}`;
                return url;
            }
        },
        'gpay': {
            label: 'Google Pay',
            icon: 'fa-google',
            fields: [
                { id: 'gpId', label: 'Google Pay ID', type: 'text', placeholder: 'example@gpay', required: true },
                { id: 'gpAmount', label: 'Amount (₹)', type: 'number', placeholder: '100' }
            ],
            build: (data) => {
                let url = `gpay://pay?pa=${data.gpId}`;
                if (data.gpAmount) url += `&am=${data.gpAmount}`;
                return url;
            }
        },
        'paytm': {
            label: 'Paytm',
            icon: 'fa-indian-rupee-sign',
            fields: [
                { id: 'paytmId', label: 'Paytm ID', type: 'text', placeholder: 'example@paytm', required: true },
                { id: 'paytmAmount', label: 'Amount (₹)', type: 'number', placeholder: '100' }
            ],
            build: (data) => {
                let url = `paytm://pay?pa=${data.paytmId}`;
                if (data.paytmAmount) url += `&am=${data.paytmAmount}`;
                return url;
            }
        },
        'bank': {
            label: 'Bank Account',
            icon: 'fa-building-columns',
            fields: [
                { id: 'bankName', label: 'Bank Name', type: 'text', placeholder: 'State Bank of India', required: true },
                { id: 'bankAccount', label: 'Account Number', type: 'text', placeholder: '1234567890', required: true },
                { id: 'bankIfsc', label: 'IFSC Code', type: 'text', placeholder: 'SBIN0001234', required: true },
                { id: 'bankHolder', label: 'Account Holder Name', type: 'text', placeholder: 'John Doe' }
            ],
            build: (data) => {
                let details = `Bank: ${data.bankName}\nAccount: ${data.bankAccount}\nIFSC: ${data.bankIfsc}`;
                if (data.bankHolder) details += `\nHolder: ${data.bankHolder}`;
                return details;
            }
        },

        // Documents
        'pdf': {
            label: 'PDF Document',
            icon: 'fa-file-pdf',
            fields: [
                { id: 'pdfUrl', label: 'PDF File URL', type: 'url', placeholder: 'https://example.com/document.pdf', required: true },
                { id: 'pdfTitle', label: 'Document Title', type: 'text', placeholder: 'My Document' }
            ],
            build: (data) => data.pdfUrl
        },
        'resume': {
            label: 'Resume',
            icon: 'fa-file-user',
            fields: [
                { id: 'resumeUrl', label: 'Resume URL', type: 'url', placeholder: 'https://example.com/resume.pdf', required: true }
            ],
            build: (data) => data.resumeUrl
        },

        // Events
        'calendar': {
            label: 'Calendar Event',
            icon: 'fa-calendar',
            fields: [
                { id: 'eventTitle', label: 'Event Title', type: 'text', placeholder: 'Team Meeting', required: true },
                { id: 'eventDate', label: 'Date', type: 'date', required: true },
                { id: 'eventStart', label: 'Start Time', type: 'time', required: true },
                { id: 'eventEnd', label: 'End Time', type: 'time', required: true },
                { id: 'eventLocation', label: 'Location', type: 'text', placeholder: 'Conference Room' }
            ],
            build: (data) => {
                if (!data.eventDate || !data.eventStart || !data.eventEnd) return data.eventTitle;
                const start = `${data.eventDate.replace(/-/g, '')}T${data.eventStart.replace(/:/g, '')}00`;
                const end = `${data.eventDate.replace(/-/g, '')}T${data.eventEnd.replace(/:/g, '')}00`;
                let event = `BEGIN:VEVENT\nSUMMARY:${data.eventTitle}\nDTSTART:${start}\nDTEND:${end}`;
                if (data.eventLocation) event += `\nLOCATION:${data.eventLocation}`;
                event += '\nEND:VEVENT';
                return event;
            }
        },
        'meeting': {
            label: 'Meeting Invite',
            icon: 'fa-calendar-check',
            fields: [
                { id: 'meetingTitle', label: 'Meeting Title', type: 'text', placeholder: 'Project Sync', required: true },
                { id: 'meetingLink', label: 'Meeting Link', type: 'url', placeholder: 'https://meet.google.com/xxx', required: true },
                { id: 'meetingDateTime', label: 'Date & Time', type: 'text', placeholder: 'Jan 15, 10:00 AM' }
            ],
            build: (data) => {
                let details = `${data.meetingTitle}\n${data.meetingLink}`;
                if (data.meetingDateTime) details += `\n${data.meetingDateTime}`;
                return details;
            }
        },

        // Location
        'gps': {
            label: 'GPS Coordinates',
            icon: 'fa-location-dot',
            fields: [
                { id: 'gpsLat', label: 'Latitude', type: 'text', placeholder: '28.6139', required: true },
                { id: 'gpsLng', label: 'Longitude', type: 'text', placeholder: '77.2090', required: true }
            ],
            build: (data) => {
                const lat = parseFloat(data.gpsLat);
                const lng = parseFloat(data.gpsLng);
                if (!isNaN(lat) && !isNaN(lng)) {
                    return `geo:${lat},${lng}`;
                }
                return `geo:0,0`;
            }
        },

        // Text
        'plaintext': {
            label: 'Plain Text',
            icon: 'fa-font',
            fields: [
                { id: 'plainText', label: 'Text Content', type: 'textarea', placeholder: 'Enter your text here...', required: true }
            ],
            build: (data) => data.plainText
        },
        'coupon': {
            label: 'Coupon Code',
            icon: 'fa-ticket',
            fields: [
                { id: 'couponCode', label: 'Coupon Code', type: 'text', placeholder: 'SUMMER20', required: true },
                { id: 'couponDescription', label: 'Description (Optional)', type: 'text', placeholder: '20% off on all items' }
            ],
            build: (data) => {
                let text = `Coupon: ${data.couponCode}`;
                if (data.couponDescription) text += `\n${data.couponDescription}`;
                return text;
            }
        },
        'otp': {
            label: 'OTP',
            icon: 'fa-shield',
            fields: [
                { id: 'otpCode', label: 'OTP Code', type: 'text', placeholder: '123456', required: true },
                { id: 'otpPurpose', label: 'Purpose (Optional)', type: 'text', placeholder: 'Login verification' }
            ],
            build: (data) => {
                let text = `OTP: ${data.otpCode}`;
                if (data.otpPurpose) text += `\n${data.otpPurpose}`;
                return text;
            }
        },

        // Business
        'businesscard': {
            label: 'Digital Business Card',
            icon: 'fa-id-card',
            fields: [
                { id: 'bcName', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'bcTitle', label: 'Job Title', type: 'text', placeholder: 'CEO' },
                { id: 'bcCompany', label: 'Company', type: 'text', placeholder: 'Astra Technology' },
                { id: 'bcEmail', label: 'Email', type: 'email', placeholder: 'john@email.com' },
                { id: 'bcPhone', label: 'Phone', type: 'tel', placeholder: '919999999999' },
                { id: 'bcWebsite', label: 'Website', type: 'url', placeholder: 'https://example.com' }
            ],
            build: (data) => {
                let card = `${data.bcName || ''}`;
                if (data.bcTitle) card += `\n${data.bcTitle}`;
                if (data.bcCompany) card += `\n${data.bcCompany}`;
                if (data.bcEmail) card += `\nEmail: ${data.bcEmail}`;
                if (data.bcPhone) card += `\nPhone: ${data.bcPhone}`;
                if (data.bcWebsite) card += `\nWebsite: ${data.bcWebsite}`;
                return card;
            }
        },
        'portfolio': {
            label: 'Portfolio',
            icon: 'fa-briefcase',
            fields: [
                { id: 'portfolioUrl', label: 'Portfolio URL', type: 'url', placeholder: 'https://portfolio.com/username', required: true }
            ],
            build: (data) => data.portfolioUrl
        },
        'feedback': {
            label: 'Feedback Form',
            icon: 'fa-comment',
            fields: [
                { id: 'feedbackUrl', label: 'Feedback Form URL', type: 'url', placeholder: 'https://forms.gle/xxxxxx', required: true }
            ],
            build: (data) => data.feedbackUrl
        },
        'menu': {
            label: 'Restaurant Menu',
            icon: 'fa-utensils',
            fields: [
                { id: 'menuUrl', label: 'Menu URL', type: 'url', placeholder: 'https://example.com/menu.pdf', required: true },
                { id: 'menuRestaurant', label: 'Restaurant Name', type: 'text', placeholder: 'Taste of India' }
            ],
            build: (data) => data.menuUrl
        },

        // Education
        'classlink': {
            label: 'Online Class Link',
            icon: 'fa-video',
            fields: [
                { id: 'classUrl', label: 'Class Link', type: 'url', placeholder: 'https://meet.google.com/xxx', required: true },
                { id: 'classSubject', label: 'Subject/Class Name', type: 'text', placeholder: 'Mathematics 101' },
                { id: 'classTime', label: 'Class Time', type: 'text', placeholder: 'Monday 10:00 AM' }
            ],
            build: (data) => {
                let details = data.classUrl;
                if (data.classSubject) details = `${data.classSubject}\n${details}`;
                if (data.classTime) details += `\n${data.classTime}`;
                return details;
            }
        },
        'certificate': {
            label: 'Certificate Verification',
            icon: 'fa-certificate',
            fields: [
                { id: 'certUrl', label: 'Verification URL', type: 'url', placeholder: 'https://verify.com/xxxx', required: true },
                { id: 'certId', label: 'Certificate ID (Optional)', type: 'text', placeholder: 'CERT-2024-001' }
            ],
            build: (data) => {
                let details = data.certUrl;
                if (data.certId) details += `\nID: ${data.certId}`;
                return details;
            }
        }
    };

    // ============================================================
    // DOM REFERENCES
    // ============================================================

    const qrForm = document.getElementById('qrForm');
    const qrType = document.getElementById('qrType');
    const qrSize = document.getElementById('qrSize');
    const fgColor = document.getElementById('fgColor');
    const bgColor = document.getElementById('bgColor');
    const errorCorrection = document.getElementById('errorCorrection');
    const qrContainer = document.getElementById('qrcode');
    const downloadBtn = document.getElementById('downloadBtn');
    const downloadSvgBtn = document.getElementById('downloadSvgBtn');
    const copyBtn = document.getElementById('copyBtn');
    const shareBtn = document.getElementById('shareBtn');
    const previewHint = document.getElementById('previewHint');
    const qrTypeBadge = document.getElementById('qrTypeBadge');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const dynamicContainer = document.getElementById('dynamicFieldsContainer');

    // ============================================================
    // STATE
    // ============================================================

    let qrCodeInstance = null;
    let currentDataUrl = null;
    let currentSvg = null;
    let currentContent = '';
    let currentType = 'url';

    // ============================================================
    // GENERATE DYNAMIC FIELDS
    // ============================================================

    function generateDynamicFields(type) {
        const config = qrTypeConfig[type];
        if (!config) return;

        let html = '';

        // Add type label
        html += `
            <div class="form-group type-label">
                <div class="type-icon"><i class="fa-solid ${config.icon}"></i></div>
                <div>
                    <strong>${config.label}</strong>
                    <small>Fill in the details below</small>
                </div>
            </div>
        `;

        config.fields.forEach(field => {
            const required = field.required ? 'required' : '';
            const prefix = field.prefix || '';

            if (field.type === 'select') {
                const options = field.options.map(opt =>
                    `<option value="${opt}" ${opt === field.default ? 'selected' : ''}>${opt}</option>`
                ).join('');
                html += `
                    <div class="form-group">
                        <label for="${field.id}">${field.label} ${field.required ? '*' : ''}</label>
                        <select id="${field.id}" ${required}>
                            ${options}
                        </select>
                    </div>
                `;
            } else if (field.type === 'textarea') {
                html += `
                    <div class="form-group">
                        <label for="${field.id}">${field.label} ${field.required ? '*' : ''}</label>
                        <textarea id="${field.id}" ${required} placeholder="${field.placeholder || ''}" rows="3"></textarea>
                    </div>
                `;
            } else if (field.type === 'password') {
                html += `
                    <div class="form-group">
                        <label for="${field.id}">${field.label} ${field.required ? '*' : ''}</label>
                        <div class="input-wrapper">
                            <input type="password" id="${field.id}" ${required} placeholder="${field.placeholder || ''}">
                            <button type="button" class="toggle-password"><i class="fa-solid fa-eye"></i></button>
                        </div>
                    </div>
                `;
            } else {
                const inputType = field.type === 'url' ? 'url' :
                    field.type === 'email' ? 'email' :
                    field.type === 'tel' ? 'tel' :
                    field.type === 'number' ? 'number' :
                    field.type === 'date' ? 'date' :
                    field.type === 'time' ? 'time' :
                    'text';

                html += `
                    <div class="form-group">
                        <label for="${field.id}">${field.label} ${field.required ? '*' : ''}</label>
                        <div class="input-wrapper ${prefix ? 'has-prefix' : ''}">
                            ${prefix ? `<span class="input-prefix">${prefix}</span>` : ''}
                            <input type="${inputType}" id="${field.id}" ${required} placeholder="${field.placeholder || ''}">
                        </div>
                    </div>
                `;
            }
        });

        dynamicContainer.innerHTML = html;

        // Add event listeners for toggle password
        document.querySelectorAll('.toggle-password').forEach(btn => {
            btn.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const icon = this.querySelector('i');
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.className = 'fa-solid fa-eye-slash';
                } else {
                    input.type = 'password';
                    icon.className = 'fa-solid fa-eye';
                }
            });
        });

        // Update badge
        qrTypeBadge.textContent = config.label;
    }

    // ============================================================
    // COLLECT FORM DATA
    // ============================================================

    function collectFormData(type) {
        const config = qrTypeConfig[type];
        if (!config) return {};

        const data = {};
        config.fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (element) {
                data[field.id] = element.value || '';
            }
        });
        return data;
    }

    // ============================================================
    // UPDATE QR TYPE
    // ============================================================

    function updateQRType() {
        const type = qrType.value;
        currentType = type;
        generateDynamicFields(type);

        // Update category buttons
        categoryBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.type === getCategoryForType(type));
        });

        // Auto-generate
        setTimeout(generateQR, 300);
    }

    // ============================================================
    // GET CATEGORY FOR TYPE
    // ============================================================

    function getCategoryForType(type) {
        const categories = {
            'website': ['url', 'blog', 'youtube', 'whatsapp', 'telegram', 'googlemaps', 'googleform'],
            'social': ['instagram', 'facebook', 'linkedin', 'twitter', 'github'],
            'contact': ['vcard', 'namephone', 'email', 'company'],
            'communication': ['phonecall', 'sms', 'emailmsg', 'whatsappmsg'],
            'network': ['wifi'],
            'payment': ['upi', 'phonepe', 'gpay', 'paytm', 'bank'],
            'document': ['pdf', 'resume'],
            'event': ['calendar', 'meeting'],
            'location': ['gps'],
            'text': ['plaintext', 'coupon', 'otp'],
            'business': ['businesscard', 'portfolio', 'feedback', 'menu'],
            'education': ['classlink', 'certificate']
        };

        for (const [category, types] of Object.entries(categories)) {
            if (types.includes(type)) return category;
        }
        return 'website';
    }

    // ============================================================
    // GENERATE QR CODE
    // ============================================================

    function generateQR() {
        const type = qrType.value;
        const config = qrTypeConfig[type];
        if (!config) return;

        const data = collectFormData(type);

        // Check required fields
        let hasError = false;
        config.fields.forEach(field => {
            if (field.required && !data[field.id]) {
                hasError = true;
                const element = document.getElementById(field.id);
                if (element) {
                    element.style.borderColor = '#ea4335';
                    element.addEventListener('input', function() {
                        this.style.borderColor = '';
                    }, { once: true });
                }
            }
        });

        if (hasError) {
            showToast('Please fill in all required fields.', 'warning');
            return;
        }

        try {
            const content = config.build(data);
            currentContent = content;

            const size = parseInt(qrSize.value);
            const fg = fgColor.value;
            const bg = bgColor.value;
            const ecLevel = errorCorrection.value;

            qrContainer.innerHTML = '';

            qrCodeInstance = new QRCode(qrContainer, {
                text: content,
                width: size,
                height: size,
                colorDark: fg,
                colorLight: bg,
                correctLevel: getErrorCorrectionLevel(ecLevel)
            });

            if (previewHint) {
                previewHint.style.display = 'none';
            }

            setTimeout(() => {
                const canvas = qrContainer.querySelector('canvas');
                if (canvas) {
                    currentDataUrl = canvas.toDataURL('image/png');
                    currentSvg = generateSVG(content, size, fg, bg, ecLevel);
                    showToast('QR Code generated successfully!', 'success');
                }
            }, 200);

        } catch (error) {
            showToast('Error generating QR code. Please check your input.', 'error');
            console.error('QR Generation Error:', error);
        }
    }

    // ============================================================
    // GET ERROR CORRECTION LEVEL
    // ============================================================

    function getErrorCorrectionLevel(level) {
        const levels = {
            'L': QRCode.CorrectLevel.L,
            'M': QRCode.CorrectLevel.M,
            'Q': QRCode.CorrectLevel.Q,
            'H': QRCode.CorrectLevel.H
        };
        return levels[level] || QRCode.CorrectLevel.M;
    }

    // ============================================================
    // GENERATE SVG
    // ============================================================

    function generateSVG(text, size, fg, bg, ecLevel) {
        try {
            const canvas = document.createElement('canvas');
            const qr = new QRCode(canvas, {
                text: text,
                width: size,
                height: size,
                colorDark: fg,
                colorLight: bg,
                correctLevel: getErrorCorrectionLevel(ecLevel)
            });

            const ctx = canvas.getContext('2d');
            const imageData = ctx.getImageData(0, 0, size, size);
            const data = imageData.data;

            let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
            svg += `<rect width="${size}" height="${size}" fill="${bg}"/>`;

            for (let y = 0; y < size; y++) {
                for (let x = 0; x < size; x++) {
                    const index = (y * size + x) * 4;
                    const r = data[index];
                    const g = data[index + 1];
                    const b = data[index + 2];
                    if (r < 128 && g < 128 && b < 128) {
                        svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="${fg}"/>`;
                    }
                }
            }
            svg += '</svg>';
            return svg;
        } catch (error) {
            console.error('SVG Generation Error:', error);
            return null;
        }
    }

    // ============================================================
    // DOWNLOAD FUNCTIONS
    // ============================================================

    function downloadPNG() {
        if (!currentDataUrl) {
            showToast('Please generate a QR code first.', 'warning');
            return;
        }
        try {
            const link = document.createElement('a');
            link.download = `qr-code-${Date.now()}.png`;
            link.href = currentDataUrl;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast('PNG downloaded successfully!', 'success');
        } catch (error) {
            showToast('Error downloading PNG.', 'error');
        }
    }

    function downloadSVG() {
        if (!currentSvg) {
            showToast('Please generate a QR code first.', 'warning');
            return;
        }
        try {
            const blob = new Blob([currentSvg], { type: 'image/svg+xml' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `qr-code-${Date.now()}.svg`;
            link.href = url;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
            showToast('SVG downloaded successfully!', 'success');
        } catch (error) {
            showToast('Error downloading SVG.', 'error');
        }
    }

    function copyQR() {
        if (!currentDataUrl) {
            showToast('Please generate a QR code first.', 'warning');
            return;
        }
        try {
            fetch(currentDataUrl)
                .then(res => res.blob())
                .then(blob => {
                    navigator.clipboard.write([
                        new ClipboardItem({ [blob.type]: blob })
                    ]).then(() => {
                        showToast('QR Code copied to clipboard!', 'success');
                    }).catch(() => {
                        navigator.clipboard.writeText(currentContent).then(() => {
                            showToast('Content copied to clipboard!', 'success');
                        });
                    });
                });
        } catch (error) {
            navigator.clipboard.writeText(currentContent).then(() => {
                showToast('Content copied to clipboard!', 'success');
            }).catch(() => {
                const textArea = document.createElement('textarea');
                textArea.value = currentContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast('Content copied to clipboard!', 'success');
            });
        }
    }

    function shareQR() {
        if (!currentDataUrl) {
            showToast('Please generate a QR code first.', 'warning');
            return;
        }
        if (navigator.share) {
            fetch(currentDataUrl)
                .then(res => res.blob())
                .then(blob => {
                    const file = new File([blob], 'qr-code.png', { type: 'image/png' });
                    navigator.share({
                        title: 'QR Code',
                        text: 'Check out this QR code!',
                        files: [file]
                    }).catch(() => {});
                });
        } else {
            navigator.clipboard.writeText(currentContent).then(() => {
                showToast('Content copied to clipboard! Share it anywhere.', 'success');
            });
        }
    }

    // ============================================================
    // TOAST NOTIFICATION
    // ============================================================

    function showToast(message, type = 'info') {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = `toast-notification toast-${type}`;

        const icons = {
            success: 'fa-check-circle',
            error: 'fa-times-circle',
            warning: 'fa-exclamation-circle',
            info: 'fa-info-circle'
        };

        toast.innerHTML = `
            <i class="fa-solid ${icons[type] || icons.info}"></i>
            <span>${message}</span>
            <button class="toast-close"><i class="fa-solid fa-xmark"></i></button>
        `;

        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);

        const timeout = setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);

        toast.querySelector('.toast-close').addEventListener('click', () => {
            clearTimeout(timeout);
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        });
    }

    // ============================================================
    // EVENT LISTENERS
    // ============================================================

    // QR Type Change
    qrType.addEventListener('change', updateQRType);

    // Category Buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.type;
            const types = {
                'website': ['url', 'blog', 'youtube', 'whatsapp', 'telegram', 'googlemaps', 'googleform'],
                'social': ['instagram', 'facebook', 'linkedin', 'twitter', 'github'],
                'contact': ['vcard', 'namephone', 'email', 'company'],
                'communication': ['phonecall', 'sms', 'emailmsg', 'whatsappmsg'],
                'network': ['wifi'],
                'payment': ['upi', 'phonepe', 'gpay', 'paytm', 'bank'],
                'document': ['pdf', 'resume'],
                'event': ['calendar', 'meeting'],
                'location': ['gps'],
                'text': ['plaintext', 'coupon', 'otp'],
                'business': ['businesscard', 'portfolio', 'feedback', 'menu'],
                'education': ['classlink', 'certificate']
            };
            const firstType = (types[category] || ['url'])[0];
            qrType.value = firstType;
            updateQRType();
        });
    });

    // Form Submit
    qrForm.addEventListener('submit', function(e) {
        e.preventDefault();
        generateQR();
    });

    // Auto-generate on change
    let debounceTimer;

    function debouncedGenerate() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(generateQR, 400);
    }

    qrSize.addEventListener('change', generateQR);
    fgColor.addEventListener('input', debouncedGenerate);
    bgColor.addEventListener('input', debouncedGenerate);
    errorCorrection.addEventListener('change', generateQR);

    // Download Buttons
    downloadBtn.addEventListener('click', downloadPNG);
    downloadSvgBtn.addEventListener('click', downloadSVG);
    copyBtn.addEventListener('click', copyQR);
    shareBtn.addEventListener('click', shareQR);

    // Keyboard shortcut: Ctrl+Enter
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
            const active = document.activeElement;
            if (active && active.closest('#dynamicFieldsContainer')) {
                e.preventDefault();
                generateQR();
            }
        }
    });

    // ============================================================
    // FOOTER YEAR
    // ============================================================

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ============================================================
    // INITIAL SETUP
    // ============================================================

    updateQRType();

})();