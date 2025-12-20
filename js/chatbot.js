/**
 * Systems & Networks - FAQ Chatbot
 * Pure Vanilla JavaScript chatbot with offline functionality
 * No external dependencies or API calls required
 */

(function() {
    'use strict';

    /* ===================================
       FAQ DATABASE
       =================================== */
    
    const faqDatabase = [
        // ============================================
        // ABOUT SYSTEMS & NETWORKS
        // ============================================
        {
            keywords: ['company', 'about', 'who', 'systems', 'networks', 'business', 'organization'],
            question: 'About Systems & Networks',
            answer: 'Systems & Networks is a Pune-based IT services company with 25+ years of experience in IT infrastructure and consulting. We serve startups, SMEs, and enterprises across India, providing reliable and professional IT solutions.'
        },
        {
            keywords: ['experience', 'years', 'how long', 'established', 'founded'],
            question: 'How long have you been in business?',
            answer: 'We have 25+ years of proven IT infrastructure experience and 30+ years of consultation experience, making us a trusted partner for businesses of all sizes.'
        },
        {
            keywords: ['location', 'where', 'office', 'pune', 'address', 'based'],
            question: 'Where are you located?',
            answer: 'We are based in Pune, India, and serve clients across local and national markets throughout India.'
        },
        {
            keywords: ['mission', 'vision', 'values', 'goal', 'purpose'],
            question: 'What is your mission?',
            answer: 'Our mission is to empower businesses with reliable, scalable, and secure IT infrastructure solutions. We aim to be a trusted technology partner that drives digital transformation and operational excellence.'
        },
        {
            keywords: ['team', 'employees', 'staff', 'people', 'experts'],
            question: 'Tell me about your team',
            answer: 'Our team consists of experienced IT professionals, certified engineers, and consultants with expertise spanning networking, servers, cloud computing, and enterprise IT management. We combine technical excellence with customer-focused service.'
        },
        {
            keywords: ['why choose', 'why us', 'advantage', 'difference', 'benefit'],
            question: 'Why choose Systems & Networks?',
            answer: 'Choose us for:<br>• 25+ years of proven IT expertise<br>• End-to-end IT solutions<br>• Personalized service for each client<br>• Proactive support and maintenance<br>• Trusted by startups to MNCs<br>• Local presence with national reach'
        },
        
        // ============================================
        // SERVICES - GENERAL
        // ============================================
        {
            keywords: ['services', 'what do you do', 'offerings', 'provide', 'sell'],
            question: 'What services do you offer?',
            answer: 'We offer comprehensive IT services including:<br>• IT Infrastructure design and deployment<br>• Networking solutions (LAN, WAN, Wi-Fi)<br>• Servers & Cloud solutions<br>• Computers & Laptops<br>• IT Rentals<br>• Domain, Hosting & Professional Email<br>• Annual Maintenance Contracts (AMC)'
        },
        {
            keywords: ['consultation', 'consulting', 'advice', 'recommend', 'guidance'],
            question: 'Do you offer IT consultation?',
            answer: 'Yes! We provide expert IT consultation services with 30+ years of experience. We help businesses assess their technology needs, plan infrastructure upgrades, optimize IT spending, and develop long-term technology roadmaps.'
        },
        {
            keywords: ['industry', 'sector', 'vertical', 'specialize'],
            question: 'What industries do you serve?',
            answer: 'We serve diverse industries including manufacturing, retail, healthcare, education, financial services, hospitality, and professional services. Our solutions are customized to meet industry-specific requirements and compliance needs.'
        },
        
        // ============================================
        // IT INFRASTRUCTURE
        // ============================================
        {
            keywords: ['infrastructure', 'it infrastructure', 'deployment', 'setup'],
            question: 'IT Infrastructure Services',
            answer: 'We design, deploy, and modernize on-premise and hybrid IT environments built for performance and scalability. Our infrastructure services ensure your business has a reliable and secure technology foundation.'
        },
        {
            keywords: ['data center', 'datacenter', 'server room'],
            question: 'Data Center Services',
            answer: 'We design and implement data center solutions including rack infrastructure, cooling systems, power management, cabling, and environmental monitoring. We ensure your server room operates efficiently and reliably.'
        },
        {
            keywords: ['structured cabling', 'cabling', 'cable management', 'wiring'],
            question: 'Structured Cabling Services',
            answer: 'We provide professional structured cabling services including Cat6/Cat6a network cabling, fiber optic installation, cable management, and testing. Proper cabling ensures reliable network performance and future scalability.'
        },
        {
            keywords: ['rack', 'server rack', 'cabinet', 'enclosure'],
            question: 'Server Rack Solutions',
            answer: 'We supply and install server racks, wall-mount cabinets, and rack accessories including PDUs, cable management, and cooling solutions. Proper rack infrastructure protects your equipment and enables efficient data center operations.'
        },
        
        // ============================================
        // NETWORKING
        // ============================================
        {
            keywords: ['network', 'networking', 'lan', 'wan', 'wifi', 'connectivity'],
            question: 'Networking Services',
            answer: 'We provide secure LAN, WAN, and Wi-Fi solutions with reliable connectivity, performance optimization, and remote access capabilities. Our networking services ensure seamless communication across your organization.'
        },
        {
            keywords: ['router', 'switch', 'firewall', 'access point', 'network device'],
            question: 'Network Equipment',
            answer: 'We supply and configure enterprise-grade routers, switches, firewalls, and wireless access points from leading vendors. We help you choose the right equipment based on your network size, performance needs, and budget.'
        },
        {
            keywords: ['wifi', 'wireless', 'access point', 'wlan'],
            question: 'Wi-Fi Solutions',
            answer: 'We design and deploy enterprise Wi-Fi networks with optimal coverage, capacity, and security. Our solutions include site surveys, access point placement, guest networks, and centralized management for reliable wireless connectivity.'
        },
        {
            keywords: ['vpn', 'remote access', 'work from home', 'secure access'],
            question: 'VPN and Remote Access',
            answer: 'We implement secure VPN solutions enabling employees to access company resources remotely. Our remote access solutions include SSL VPNs, IPSec VPNs, and zero-trust network access (ZTNA) for enhanced security.'
        },
        {
            keywords: ['network security', 'firewall', 'intrusion', 'threat'],
            question: 'Network Security',
            answer: 'We implement multi-layered network security including next-generation firewalls, intrusion prevention systems (IPS), content filtering, and network segmentation. Our security solutions protect your network from cyber threats.'
        },
        {
            keywords: ['bandwidth', 'internet', 'isp', 'connection', 'broadband'],
            question: 'Internet Connectivity',
            answer: 'We help businesses select and implement appropriate internet connectivity solutions including broadband, leased lines, and SD-WAN. We ensure reliable internet access with proper backup connections for business continuity.'
        },
        {
            keywords: ['network monitoring', 'monitoring', 'network management'],
            question: 'Network Monitoring',
            answer: 'We implement network monitoring tools that provide visibility into network performance, bandwidth usage, and potential issues. Proactive monitoring helps prevent downtime and optimize network performance.'
        },
        
        // ============================================
        // SERVERS & CLOUD
        // ============================================
        {
            keywords: ['server', 'cloud', 'storage', 'backup', 'virtualization'],
            question: 'Servers & Cloud Services',
            answer: 'We offer virtualization, storage, backup, disaster recovery, and cloud integration solutions aligned with your business continuity goals. Our server solutions ensure your data is safe and accessible.'
        },
        {
            keywords: ['physical server', 'dedicated server', 'tower server', 'rack server'],
            question: 'Physical Server Solutions',
            answer: 'We provide enterprise-grade physical servers including tower servers, rack servers, and blade servers. We help with sizing, configuration, installation, and ongoing management of your server infrastructure.'
        },
        {
            keywords: ['virtualization', 'vmware', 'hyper-v', 'virtual machine', 'vm'],
            question: 'Server Virtualization',
            answer: 'We implement virtualization solutions using VMware, Hyper-V, and other platforms. Virtualization reduces hardware costs, improves resource utilization, and enables faster deployment of new servers.'
        },
        {
            keywords: ['cloud migration', 'move to cloud', 'cloud adoption'],
            question: 'Cloud Migration Services',
            answer: 'We help businesses migrate to cloud platforms including AWS, Azure, and Google Cloud. Our migration services include assessment, planning, execution, and optimization to ensure a smooth transition.'
        },
        {
            keywords: ['hybrid cloud', 'public cloud', 'private cloud'],
            question: 'Cloud Infrastructure Options',
            answer: 'We help you choose the right cloud model:<br>• <strong>Public Cloud:</strong> AWS, Azure, Google Cloud<br>• <strong>Private Cloud:</strong> On-premise or hosted<br>• <strong>Hybrid Cloud:</strong> Combination of public and private<br>We design solutions that balance performance, security, and cost.'
        },
        {
            keywords: ['backup', 'data backup', 'backup solution'],
            question: 'Backup Solutions',
            answer: 'We implement comprehensive backup solutions including on-site, off-site, and cloud backups. Our solutions ensure your data is protected with automated backups, versioning, and fast recovery capabilities.'
        },
        {
            keywords: ['disaster recovery', 'dr', 'business continuity', 'bcp'],
            question: 'Disaster Recovery Planning',
            answer: 'We develop disaster recovery plans and implement solutions to ensure business continuity. This includes backup systems, replication, failover mechanisms, and documented recovery procedures to minimize downtime.'
        },
        {
            keywords: ['storage', 'nas', 'san', 'file server', 'data storage'],
            question: 'Storage Solutions',
            answer: 'We provide enterprise storage solutions including NAS (Network Attached Storage), SAN (Storage Area Network), and direct-attached storage. We help you choose scalable storage that meets performance and capacity needs.'
        },
        
        // ============================================
        // COMPUTERS & LAPTOPS
        // ============================================
        {
            keywords: ['computer', 'laptop', 'desktop', 'workstation', 'pc'],
            question: 'Computers & Laptops',
            answer: 'We handle procurement, configuration, deployment, and lifecycle management of end-user computing devices. We help you choose the right hardware for your business needs.'
        },
        {
            keywords: ['brand', 'manufacturer', 'dell', 'hp', 'lenovo'],
            question: 'What computer brands do you work with?',
            answer: 'We work with leading manufacturers including Dell, HP, Lenovo, Acer, ASUS, and others. We help you select the best brand and model based on your requirements, budget, and support needs.'
        },
        {
            keywords: ['bulk', 'volume', 'multiple', 'many computers'],
            question: 'Bulk Computer Procurement',
            answer: 'Yes, we handle bulk procurement for businesses needing multiple computers or laptops. We offer competitive pricing, coordinated delivery, and mass deployment services with standard configurations.'
        },
        {
            keywords: ['workstation', 'high performance', 'cad', 'design', 'graphics'],
            question: 'Workstation Solutions',
            answer: 'We provide high-performance workstations for demanding applications like CAD, 3D modeling, video editing, and data analysis. We configure systems with professional graphics cards, high RAM, and fast storage.'
        },
        {
            keywords: ['thin client', 'zero client', 'vdi'],
            question: 'Thin Client Solutions',
            answer: 'We implement thin client and VDI (Virtual Desktop Infrastructure) solutions that centralize desktop management, improve security, and reduce hardware costs. Ideal for organizations wanting centralized control.'
        },
        
        // ============================================
        // IT RENTALS
        // ============================================
        {
            keywords: ['rental', 'rent', 'lease', 'temporary', 'short-term'],
            question: 'IT Rentals',
            answer: 'We provide flexible hardware rental solutions for short-term projects, seasonal demand, training programs, and events. Perfect for temporary IT needs without long-term commitment.'
        },
        {
            keywords: ['rent laptop', 'laptop rental', 'rent computer'],
            question: 'Laptop and Computer Rentals',
            answer: 'We offer laptop and desktop rentals for any duration - daily, weekly, monthly, or longer. Equipment is pre-configured and ready to use. Perfect for temporary staff, projects, training, or events.'
        },
        {
            keywords: ['rent server', 'server rental', 'temporary server'],
            question: 'Server Rentals',
            answer: 'We provide server rentals for temporary needs including testing, development, events, or short-term projects. Servers come fully configured and can be customized to your specifications.'
        },
        {
            keywords: ['rent network', 'network rental', 'temporary network'],
            question: 'Network Equipment Rentals',
            answer: 'We rent networking equipment including routers, switches, wireless access points, and firewalls. Ideal for temporary offices, events, expansion during peak periods, or testing new equipment.'
        },
        {
            keywords: ['event', 'conference', 'exhibition', 'tradeshow'],
            question: 'Event IT Rentals',
            answer: 'We provide complete IT rental solutions for events, conferences, exhibitions, and trade shows including laptops, tablets, projectors, network equipment, and on-site technical support.'
        },
        
        // ============================================
        // DOMAIN, HOSTING & EMAIL
        // ============================================
        {
            keywords: ['domain', 'hosting', 'email', 'website', 'web', 'professional email'],
            question: 'Domain, Hosting & Email',
            answer: 'We provide domain registration, web hosting, and professional email solutions with reliable uptime and support. Get your business online with our hosting services.'
        },
        {
            keywords: ['register domain', 'domain registration', 'buy domain', 'domain name'],
            question: 'Domain Registration',
            answer: 'We handle domain registration for all major TLDs (.com, .in, .org, .net, etc.). We help you choose the right domain name, manage renewals, and configure DNS settings for your business.'
        },
        {
            keywords: ['web hosting', 'website hosting', 'shared hosting', 'hosting plan'],
            question: 'Web Hosting Services',
            answer: 'We offer reliable web hosting with 99.9% uptime, fast loading speeds, regular backups, and 24/7 support. Plans range from shared hosting for small sites to dedicated servers for high-traffic applications.'
        },
        {
            keywords: ['business email', 'professional email', 'corporate email', 'email hosting'],
            question: 'Professional Email Solutions',
            answer: 'We provide professional email services using your domain name (name@yourcompany.com). Solutions include Microsoft 365, Google Workspace, or custom email hosting with spam protection and mobile access.'
        },
        {
            keywords: ['microsoft 365', 'office 365', 'microsoft office'],
            question: 'Microsoft 365 Services',
            answer: 'We are authorized resellers of Microsoft 365 (Office 365) providing email, Office applications, OneDrive storage, and Teams collaboration. We handle setup, migration, and ongoing support.'
        },
        {
            keywords: ['google workspace', 'g suite', 'gmail business'],
            question: 'Google Workspace',
            answer: 'We provide Google Workspace (formerly G Suite) with Gmail, Google Drive, Docs, Sheets, and Meet. Ideal for businesses wanting Google\'s cloud productivity tools with professional email.'
        },
        {
            keywords: ['ssl', 'https', 'security certificate', 'ssl certificate'],
            question: 'SSL Certificates',
            answer: 'We provide and install SSL certificates to secure your website with HTTPS encryption. SSL certificates protect sensitive data, improve SEO rankings, and build customer trust.'
        },
        
        // ============================================
        // SUPPORT & MAINTENANCE
        // ============================================
        {
            keywords: ['amc', 'maintenance', 'support', 'annual', 'contract'],
            question: 'Annual Maintenance Contract',
            answer: 'Our AMC services include proactive monitoring, preventive maintenance, and responsive support to ensure uninterrupted operations. We keep your IT systems running smoothly year-round.'
        },
        {
            keywords: ['support hours', 'availability', 'when', 'business hours', 'working hours'],
            question: 'Support Hours',
            answer: 'Our support is available during business hours (Monday-Saturday, 9 AM - 6 PM IST). For AMC customers, we offer extended support options including 24/7 emergency support for critical systems.'
        },
        {
            keywords: ['remote support', 'remote assistance', 'online support'],
            question: 'Remote Support Services',
            answer: 'We provide remote support for many IT issues including software troubleshooting, configuration changes, and system monitoring. Remote support enables faster resolution times and reduces on-site visit costs.'
        },
        {
            keywords: ['onsite', 'on-site', 'visit', 'come to office'],
            question: 'On-Site Support',
            answer: 'We provide on-site support for hardware installation, troubleshooting, and issues requiring physical presence. AMC customers receive priority on-site service with guaranteed response times.'
        },
        {
            keywords: ['emergency', 'urgent', 'critical', 'down', 'outage'],
            question: 'Emergency Support',
            answer: 'For critical system failures, we provide emergency support to minimize downtime. AMC customers have dedicated emergency contacts and guaranteed response times based on their service level agreement.'
        },
        
        // ============================================
        // PRICING & BUSINESS
        // ============================================
        {
            keywords: ['quote', 'pricing', 'cost', 'price', 'how much'],
            question: 'How do I get a quote?',
            answer: 'Please contact us directly via email or phone to discuss your requirements. We provide customized quotes based on your specific needs and project scope.'
        },
        {
            keywords: ['payment', 'terms', 'billing', 'invoice'],
            question: 'Payment Terms',
            answer: 'We accept various payment methods including bank transfer, checks, and online payments. Payment terms are flexible and typically include milestone-based payments for projects and monthly/annual billing for services.'
        },
        {
            keywords: ['warranty', 'guarantee', 'coverage'],
            question: 'Warranty and Guarantees',
            answer: 'All hardware comes with manufacturer warranty. We handle warranty claims and provide replacement during warranty period. Our services include satisfaction guarantees and we stand behind our work.'
        },
        
        // ============================================
        // CLIENTS & INDUSTRIES
        // ============================================
        {
            keywords: ['client', 'customer', 'who do you serve', 'clientele'],
            question: 'Who are your clients?',
            answer: 'We serve a diverse range of clients from startups to MNCs (Multi-National Corporations) across various industries. Our experience spans small businesses to large enterprises.'
        },
        {
            keywords: ['startup', 'small business', 'sme', 'entrepreneur'],
            question: 'Services for Startups',
            answer: 'We help startups establish reliable IT infrastructure at reasonable costs. Our solutions scale with your growth and include flexible rental options, cloud solutions, and essential IT services to get you started.'
        },
        {
            keywords: ['enterprise', 'large company', 'corporation', 'mnc'],
            question: 'Enterprise Solutions',
            answer: 'We provide enterprise-grade solutions for large organizations including complex network design, data center services, multi-location deployments, and 24/7 support with stringent SLAs.'
        },
        {
            keywords: ['reference', 'case study', 'portfolio', 'past work'],
            question: 'Client References',
            answer: 'We have successfully served numerous clients across industries. For specific case studies and references, please contact us directly. We can provide relevant examples based on your industry and requirements.'
        },
        
        // ============================================
        // TECHNICAL CONCEPTS
        // ============================================
        {
            keywords: ['system', 'operating system', 'os', 'windows', 'linux'],
            question: 'What are operating systems?',
            answer: 'An operating system (OS) is software that manages computer hardware and software resources. Common examples include Windows, Linux, and macOS. We help you choose and deploy the right OS for your business needs.'
        },
        {
            keywords: ['what is network', 'networking basics', 'network basics'],
            question: 'What is computer networking?',
            answer: 'Computer networking connects multiple computers and devices to share resources and communicate. It includes LANs (Local Area Networks), WANs (Wide Area Networks), and internet connectivity. We design and implement secure networks for businesses.'
        },
        {
            keywords: ['ip address', 'ip', 'network address'],
            question: 'What is an IP Address?',
            answer: 'An IP address is a unique numerical label assigned to each device on a network. It enables devices to communicate with each other. We manage IP addressing schemes including static IPs, DHCP, and public IP allocation.'
        },
        {
            keywords: ['what is server', 'server definition'],
            question: 'What is a server?',
            answer: 'A server is a powerful computer that provides services, data, or resources to other computers (clients) on a network. Common types include file servers, web servers, email servers, and database servers.'
        },
        {
            keywords: ['what is cloud', 'cloud computing', 'cloud definition'],
            question: 'What is Cloud Computing?',
            answer: 'Cloud computing delivers IT resources (servers, storage, databases, software) over the internet on-demand. Benefits include scalability, cost savings, accessibility from anywhere, and reduced IT management burden.'
        },
        {
            keywords: ['cybersecurity', 'security', 'cyber attack', 'hacking'],
            question: 'Cybersecurity Services',
            answer: 'We implement comprehensive cybersecurity measures including firewalls, antivirus, intrusion detection, security audits, employee training, and incident response planning to protect your business from cyber threats.'
        },
        {
            keywords: ['antivirus', 'malware', 'virus protection'],
            question: 'Antivirus Solutions',
            answer: 'We deploy enterprise antivirus and anti-malware solutions that protect endpoints, servers, and network devices. Our solutions include centralized management, automatic updates, and threat reporting.'
        },
        
        // ============================================
        // CONTACT & NAVIGATION
        // ============================================
        {
            keywords: ['contact', 'reach', 'call', 'phone', 'email', 'get in touch'],
            question: 'How can I contact you?',
            answer: 'You can reach us at:<br>📧 Email: info@sysandnet.com<br>📱 Phone: +91 96232 68939<br>🔗 LinkedIn: linkedin.com/company/systems-networks<br>Or visit our Contact page for more details.'
        },
        {
            keywords: ['navigate', 'pages', 'menu', 'sections', 'website'],
            question: 'How do I navigate this website?',
            answer: 'Our website has the following main sections:<br>• Home - Overview of our company<br>• About - Company information and background<br>• Services - Detailed service offerings<br>• Contact - Get in touch with us<br>Use the navigation menu at the top to browse.'
        },
        {
            keywords: ['help', 'support', 'assist', 'question'],
            question: 'How can you help me?',
            answer: 'I can answer questions about Systems & Networks, our services, IT concepts, and help you navigate this website. Feel free to ask about our company, services, or contact information!'
        },
        {
            keywords: ['social media', 'linkedin', 'facebook', 'twitter', 'follow'],
            question: 'Social Media Presence',
            answer: 'Connect with us on LinkedIn: linkedin.com/company/systems-networks. Stay updated on our latest offerings, IT tips, and industry insights.'
        }
    ];

    /* ===================================
       CHATBOT STATE
       =================================== */
    
    let chatState = {
        isOpen: false,
        messages: [],
        isTyping: false,
        hasGreeted: false
    };

    /* ===================================
       CONFIGURATION
       =================================== */
    
    const config = {
        botName: 'S&N Assistant',
        botStatus: 'Online • Ready to help',
        welcomeMessage: 'Hi! I\'m your Systems & Networks virtual assistant. I can help you learn about our IT services, answer technical questions, and guide you through our website. How can I assist you today?',
        fallbackMessage: 'I\'m not sure I understand that question. Here are some topics I can help with:',
        typingDelay: 1000, // milliseconds
        autoGreetDelay: 500, // milliseconds
        quickReplies: [
            'What services do you offer?',
            'How can I contact you?',
            'About Systems & Networks',
            'IT Infrastructure',
            'Networking solutions'
        ]
    };

    /* ===================================
       UTILITY FUNCTIONS
       =================================== */
    
    /**
     * Normalize text for matching (lowercase, remove extra spaces)
     */
    function normalizeText(text) {
        return text.toLowerCase().trim().replace(/\s+/g, ' ');
    }

    /**
     * Calculate similarity score between user input and FAQ keywords
     */
    function calculateSimilarity(userInput, keywords) {
        const normalizedInput = normalizeText(userInput);
        let score = 0;
        
        keywords.forEach(keyword => {
            const normalizedKeyword = normalizeText(keyword);
            
            // Exact phrase match
            if (normalizedInput.includes(normalizedKeyword)) {
                // Give full score for exact phrase match and skip word-level scoring
                score += 10;
            } else {
                // Word-level and substring partial match
                const words = normalizedInput.split(' ');
                words.forEach(word => {
                    if (word === normalizedKeyword) {
                        score += 5;
                    } else if (word.includes(normalizedKeyword) || normalizedKeyword.includes(word)) {
                        score += 2;
                    }
                });
            }
        });
        
        return score;
    }

    /**
     * Find best matching FAQ entry
     */
    function findBestMatch(userInput) {
        let bestMatch = null;
        let highestScore = 0;
        
        faqDatabase.forEach(faq => {
            const score = calculateSimilarity(userInput, faq.keywords);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = faq;
            }
        });
        
        // Only return match if score is above threshold (at least one exact word match)
        return highestScore >= 5 ? bestMatch : null;
    }

    /**
     * Get current time in HH:MM format
     */
    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }

    /**
     * Shuffle an array using the Fisher-Yates algorithm
     * Returns a new shuffled array without mutating the original
     */
    function shuffleArray(array) {
        const result = array.slice(); // shallow copy to preserve original
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = result[i];
            result[i] = result[j];
            result[j] = temp;
        }
        return result;
    }

    /**
     * Get random suggestions from FAQ database
     */
    function getRandomSuggestions(count = 3) {
        const shuffled = shuffleArray(faqDatabase);
        return shuffled.slice(0, count).map(faq => faq.question);
    }

    /* ===================================
       DOM MANIPULATION
       =================================== */
    
    /**
     * Create chatbot HTML structure
     */
    function createChatbotHTML() {
        const chatbotHTML = `
            <!-- Chatbot Floating Button -->
            <button class="chatbot-button" id="chatbotButton" aria-label="Open chat" title="Chat with us">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                    <path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
                </svg>
            </button>

            <!-- Chatbot Window -->
            <div class="chatbot-window" id="chatbotWindow">
                <!-- Header -->
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <div class="chatbot-header-avatar">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                            </svg>
                        </div>
                        <div class="chatbot-header-text">
                            <h3>${config.botName}</h3>
                            <p>${config.botStatus}</p>
                        </div>
                    </div>
                    <div class="chatbot-header-actions">
                        <button class="chatbot-header-btn" id="chatbotClear" aria-label="Clear chat" title="Clear chat">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                            </svg>
                        </button>
                        <button class="chatbot-header-btn" id="chatbotClose" aria-label="Close chat" title="Close chat">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Messages Container -->
                <div class="chatbot-messages" id="chatbotMessages">
                    <!-- Messages will be appended here -->
                </div>

                <!-- Quick Replies -->
                <div class="chatbot-quick-replies" id="chatbotQuickReplies">
                    <!-- Quick reply buttons will be appended here -->
                </div>

                <!-- Input Area -->
                <div class="chatbot-input">
                    <input 
                        type="text" 
                        class="chatbot-input-field" 
                        id="chatbotInput" 
                        placeholder="Type your message..."
                        aria-label="Type your message"
                        autocomplete="off"
                    />
                    <button class="chatbot-send-btn" id="chatbotSend" aria-label="Send message">
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        // Inject into DOM
        const container = document.createElement('div');
        container.innerHTML = chatbotHTML;
        document.body.appendChild(container);
    }

    /**
     * Add a message to the chat
     */
    function addMessage(text, type = 'bot', showTime = false) {
        const messagesContainer = document.getElementById('chatbotMessages');
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${type}`;
        
        // Create avatar element
        const avatarDiv = document.createElement('div');
        avatarDiv.className = 'chatbot-message-avatar';
        avatarDiv.innerHTML = `
            <svg viewBox="0 0 24 24" aria-hidden="true">
                ${type === 'bot' 
                    ? '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>'
                    : '<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'
                }
            </svg>
        `;
        
        // Create bubble container
        const bubbleContainer = document.createElement('div');
        
        // Create message bubble
        const bubbleDiv = document.createElement('div');
        bubbleDiv.className = 'chatbot-message-bubble';
        
        // Use textContent for user messages (prevent XSS), innerHTML for bot messages (allow formatting)
        if (type === 'user') {
            bubbleDiv.textContent = text;
        } else {
            bubbleDiv.innerHTML = text;
        }
        
        bubbleContainer.appendChild(bubbleDiv);
        
        // Add timestamp if requested
        if (showTime) {
            const timeDiv = document.createElement('div');
            timeDiv.className = 'chatbot-message-time';
            timeDiv.textContent = getCurrentTime();
            bubbleContainer.appendChild(timeDiv);
        }
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(bubbleContainer);
        messagesContainer.appendChild(messageDiv);
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Store in state
        chatState.messages.push({ text, type, time: getCurrentTime() });
    }

    /**
     * Show typing indicator
     */
    function showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbotMessages');
        
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-typing';
        typingDiv.id = 'chatbotTyping';
        typingDiv.innerHTML = `
            <div class="chatbot-message-avatar">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
            </div>
            <div class="chatbot-typing-bubble">
                <div class="chatbot-typing-dot"></div>
                <div class="chatbot-typing-dot"></div>
                <div class="chatbot-typing-dot"></div>
            </div>
        `;
        
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        chatState.isTyping = true;
    }

    /**
     * Hide typing indicator
     */
    function hideTypingIndicator() {
        const typingDiv = document.getElementById('chatbotTyping');
        if (typingDiv) {
            typingDiv.remove();
        }
        chatState.isTyping = false;
    }

    /**
     * Display quick reply buttons
     */
    function showQuickReplies(replies) {
        const quickRepliesContainer = document.getElementById('chatbotQuickReplies');
        quickRepliesContainer.innerHTML = '';
        
        replies.forEach(reply => {
            const button = document.createElement('button');
            button.className = 'chatbot-quick-reply';
            button.textContent = reply;
            button.onclick = () => handleQuickReply(reply);
            quickRepliesContainer.appendChild(button);
        });
    }

    /**
     * Clear quick replies
     */
    function clearQuickReplies() {
        const quickRepliesContainer = document.getElementById('chatbotQuickReplies');
        quickRepliesContainer.innerHTML = '';
    }

    /**
     * Handle quick reply button click
     */
    function handleQuickReply(text) {
        clearQuickReplies();
        handleUserMessage(text);
    }

    /**
     * Process user message and generate response
     */
    function handleUserMessage(userMessage) {
        // Add user message
        addMessage(userMessage, 'user');
        
        // Clear input
        const inputField = document.getElementById('chatbotInput');
        inputField.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate thinking delay
        setTimeout(() => {
            hideTypingIndicator();
            
            // Find matching FAQ
            const match = findBestMatch(userMessage);
            
            if (match) {
                addMessage(match.answer, 'bot');
            } else {
                // No match found - show fallback with suggestions
                const suggestions = getRandomSuggestions(3);
                let fallbackHTML = `${config.fallbackMessage}<br><br>`;
                suggestions.forEach(suggestion => {
                    fallbackHTML += `• ${suggestion}<br>`;
                });
                addMessage(fallbackHTML, 'bot');
                showQuickReplies(suggestions);
            }
        }, config.typingDelay);
    }

    /**
     * Initialize welcome message
     */
    function showWelcomeMessage() {
        if (!chatState.hasGreeted) {
            setTimeout(() => {
                addMessage(config.welcomeMessage, 'bot');
                showQuickReplies(config.quickReplies);
                chatState.hasGreeted = true;
            }, config.autoGreetDelay);
        }
    }

    /**
     * Clear all messages
     */
    function clearChat() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.innerHTML = '';
        chatState.messages = [];
        chatState.hasGreeted = false;
        clearQuickReplies();
        showWelcomeMessage();
    }

    /**
     * Open chatbot window
     */
    function openChatbot() {
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotButton = document.getElementById('chatbotButton');
        
        chatbotWindow.classList.add('open');
        chatbotButton.classList.add('hidden');
        chatState.isOpen = true;
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('chatbotInput').focus();
        }, 300);
        
        // Show welcome message if first time
        showWelcomeMessage();
    }

    /**
     * Close chatbot window
     */
    function closeChatbot() {
        const chatbotWindow = document.getElementById('chatbotWindow');
        const chatbotButton = document.getElementById('chatbotButton');
        
        chatbotWindow.classList.remove('open');
        chatbotButton.classList.remove('hidden');
        chatState.isOpen = false;
    }

    /* ===================================
       EVENT LISTENERS
       =================================== */
    
    function attachEventListeners() {
        // Get DOM elements with error handling
        const chatbotButton = document.getElementById('chatbotButton');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatbotClear = document.getElementById('chatbotClear');
        const chatbotSend = document.getElementById('chatbotSend');
        const chatbotInput = document.getElementById('chatbotInput');
        
        // Verify all required elements exist
        if (!chatbotButton || !chatbotClose || !chatbotClear || !chatbotSend || !chatbotInput) {
            console.error('Chatbot: Required DOM elements not found. Chatbot initialization failed.');
            return;
        }
        
        // Open chatbot
        chatbotButton.addEventListener('click', openChatbot);
        
        // Close chatbot
        chatbotClose.addEventListener('click', closeChatbot);
        
        // Clear chat
        chatbotClear.addEventListener('click', () => {
            if (confirm('Are you sure you want to clear the chat history?')) {
                clearChat();
            }
        });
        
        // Send message button
        chatbotSend.addEventListener('click', () => {
            const message = chatbotInput.value.trim();
            
            if (message) {
                clearQuickReplies();
                handleUserMessage(message);
            }
        });
        
        // Send message on Enter key
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                chatbotSend.click();
            }
        });
        
        // Keyboard accessibility - Escape to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && chatState.isOpen) {
                closeChatbot();
            }
        });
    }

    /* ===================================
       INITIALIZATION
       =================================== */
    
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                createChatbotHTML();
                attachEventListeners();
                console.log('Systems & Networks Chatbot initialized');
            });
        } else {
            createChatbotHTML();
            attachEventListeners();
            console.log('Systems & Networks Chatbot initialized');
        }
    }

    // Initialize chatbot
    init();

})();
