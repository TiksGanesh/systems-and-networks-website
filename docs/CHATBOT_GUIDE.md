# FAQ Chatbot - Implementation Guide

## Overview

The Systems & Networks FAQ Chatbot is a lightweight, offline-capable virtual assistant that helps website visitors find information about IT services, company details, and technical topics. Built with pure vanilla JavaScript, HTML5, and CSS3, it requires no external dependencies or internet connection.

## Features

### Core Functionality
- ✅ **Offline Operation** - Works without internet or API calls
- ✅ **Smart Keyword Matching** - Intelligent fuzzy matching algorithm
- ✅ **Quick Reply Buttons** - One-click answers to common questions
- ✅ **Typing Indicator** - Visual feedback when bot is "thinking"
- ✅ **Message History** - Scrollable conversation history
- ✅ **Minimize/Maximize** - Easy to open and close
- ✅ **Clear Chat** - Reset conversation anytime
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Keyboard Accessible** - Full keyboard navigation support

### User Experience
- Welcome message on first interaction
- Suggested questions to get started
- Fallback responses with helpful suggestions
- Smooth animations and transitions
- Professional, modern design
- Pulse animation on chat button for attention

## Quick Start

### Basic Integration

Add these two lines to your HTML page before the closing `</body>` tag:

```html
<!-- Chatbot Styles -->
<link rel="stylesheet" href="css/chatbot.css">

<!-- Chatbot Script -->
<script src="js/chatbot.js"></script>
```

That's it! The chatbot will automatically initialize and appear in the bottom-right corner.

### Example Integration

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page - Systems & Networks</title>
    
    <!-- Your existing stylesheets -->
    <link rel="stylesheet" href="css/styles.css">
    
    <!-- Chatbot CSS -->
    <link rel="stylesheet" href="css/chatbot.css">
</head>
<body>
    <!-- Your page content -->
    <main>
        <h1>Welcome to Systems & Networks</h1>
        <!-- ... -->
    </main>
    
    <!-- Your existing scripts -->
    <script src="js/main.js"></script>
    
    <!-- Chatbot JS -->
    <script src="js/chatbot.js"></script>
</body>
</html>
```

## Configuration

### Bot Settings

Edit the `config` object in `js/chatbot.js` to customize the chatbot:

```javascript
const config = {
    botName: 'S&N Assistant',              // Bot display name
    botStatus: 'Online • Ready to help',   // Status text in header
    welcomeMessage: 'Hi! I\'m your...',    // First message shown
    fallbackMessage: 'I\'m not sure...',   // When no match found
    typingDelay: 1000,                     // Typing indicator duration (ms)
    autoGreetDelay: 500,                   // Delay before welcome message (ms)
    quickReplies: [                        // Initial quick reply buttons
        'What services do you offer?',
        'How can I contact you?',
        'About Systems & Networks',
        'IT Infrastructure',
        'Networking solutions'
    ]
};
```

### Customizing Quick Replies

Quick replies are clickable buttons that let users ask questions with one click. You can customize them:

```javascript
quickReplies: [
    'Your custom question 1',
    'Your custom question 2',
    'Your custom question 3',
    'Your custom question 4',
    'Your custom question 5'
]
```

**Best Practices:**
- Keep questions short and clear
- Use 3-5 quick replies
- Focus on most common queries
- Update based on user behavior

## FAQ Database

### Structure

The FAQ database is an array of objects, each containing keywords, a question title, and an answer:

```javascript
{
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    question: 'Question Title',
    answer: 'The answer text that will be displayed to users.'
}
```

### Adding New FAQ Entries

To add a new FAQ entry, add an object to the `faqDatabase` array in `js/chatbot.js`:

```javascript
const faqDatabase = [
    // Existing entries...
    
    // Your new entry
    {
        keywords: ['price', 'cost', 'pricing', 'quote', 'how much'],
        question: 'How much do your services cost?',
        answer: 'Our pricing varies based on your specific requirements. Please contact us at info@sysandnet.com or call +91 96232 68939 for a customized quote.'
    }
];
```

### FAQ Entry Guidelines

#### Keywords
- Add 5-10 related keywords per entry
- Include synonyms and variations
- Use lowercase (system normalizes automatically)
- Think about how users might phrase questions
- Include abbreviations (e.g., 'amc' for Annual Maintenance Contract)

**Example:**
```javascript
keywords: ['network', 'networking', 'lan', 'wan', 'wifi', 'connectivity', 'internet']
```

#### Questions
- Clear, concise question titles
- Used for suggestions when no match found
- Should match what users might ask

#### Answers
- Keep answers clear and concise
- Use HTML tags for formatting:
  - `<br>` for line breaks
  - `<strong>` for emphasis
  - `•` for bullet points
- Include relevant contact information
- Link to specific pages when helpful

**Example Answer with Formatting:**
```javascript
answer: 'We offer several networking services:<br>• LAN setup and configuration<br>• Wi-Fi deployment<br>• Network security<br><br>Contact us at <strong>info@sysandnet.com</strong> for more details.'
```

### Example FAQ Entry

```javascript
{
    keywords: ['backup', 'data backup', 'disaster recovery', 'data protection'],
    question: 'Do you provide backup solutions?',
    answer: 'Yes! We offer comprehensive backup and disaster recovery solutions including:<br>• Automated daily backups<br>• Cloud and on-premise storage<br>• Disaster recovery planning<br>• Data restoration services<br><br>Protect your business data with our reliable backup solutions.'
}
```

## Styling Customization

### Color Scheme

The chatbot uses CSS variables defined in `css/chatbot.css`. Customize colors to match your brand:

```css
:root {
    --chatbot-primary: #0066CC;           /* Main brand color */
    --chatbot-primary-dark: #0052A3;      /* Hover states */
    --chatbot-primary-light: #3385D6;     /* Light accents */
    --chatbot-secondary: #004080;         /* User messages */
    
    --chatbot-user-bubble: #0066CC;       /* User message background */
    --chatbot-bot-bubble: #F5F5F5;        /* Bot message background */
    --chatbot-user-text: #FFFFFF;         /* User message text */
    --chatbot-bot-text: #333333;          /* Bot message text */
}
```

### Position Customization

Change the chatbot button position by editing `.chatbot-button` in `css/chatbot.css`:

```css
.chatbot-button {
    position: fixed;
    bottom: 24px;    /* Distance from bottom */
    right: 24px;     /* Distance from right */
    /* Change to left: 24px; for left-side placement */
}
```

### Size Adjustments

Modify the chat window dimensions:

```css
.chatbot-window {
    width: 380px;                         /* Window width */
    height: 580px;                        /* Window height */
    max-width: calc(100vw - 48px);       /* Mobile max width */
    max-height: calc(100vh - 100px);     /* Mobile max height */
}
```

### Animation Speed

Adjust animation durations:

```css
:root {
    --chatbot-transition: all 0.3s ease;  /* General transitions */
}

/* Typing indicator delay in js/chatbot.js */
typingDelay: 1000,  // milliseconds
```

## How the Matching Algorithm Works

### Keyword Matching

The chatbot uses a scoring system to find the best matching FAQ entry:

1. **Normalization**: User input is converted to lowercase and trimmed
2. **Keyword Scanning**: Each FAQ entry's keywords are checked
3. **Scoring**:
   - Exact phrase match: +10 points
   - Exact word match: +5 points
   - Partial word match: +2 points
4. **Best Match**: Entry with highest score (above threshold) is selected
5. **Fallback**: If no good match, shows suggestions

### Matching Examples

**User Input:** "How can I contact you?"

Matches FAQ with keywords: `['contact', 'reach', 'call', 'phone', 'email']`
- "contact" exact word match: +5
- Multiple word matches give high score
- FAQ answer about contact information is returned

**User Input:** "network setup"

Matches FAQ with keywords: `['network', 'networking', 'lan', 'wan']`
- "network" exact match: +10
- "setup" may partially match other keywords
- Networking services FAQ is returned

## User Interactions

### Opening the Chat
- Click floating chat button (bottom-right)
- Automatically shows welcome message
- Displays quick reply buttons

### Sending Messages
- Type in input field
- Press Enter or click send button
- Message appears in conversation
- Bot responds after typing indicator

### Quick Replies
- Click any quick reply button
- Instantly sends that question
- Bot responds immediately

### Clearing Chat
- Click trash icon in header
- Confirms before clearing
- Resets conversation
- Shows welcome message again

### Closing Chat
- Click X icon in header
- Press Escape key
- Chat window closes
- Reopens where you left off

## Keyboard Navigation

The chatbot is fully accessible via keyboard:

- **Tab**: Navigate between buttons and input
- **Enter**: Send message / activate button
- **Escape**: Close chat window
- **Arrow Keys**: Scroll through messages (when focused)

## Responsive Behavior

### Desktop (≥992px)
- Fixed position in bottom-right
- 380px × 580px window
- Full features enabled

### Tablet (576px - 991px)
- Slightly smaller window
- 340px × 520px
- All features maintained

### Mobile (<576px)
- **Full-screen mode**
- Takes entire viewport
- Optimized touch targets
- Message bubbles expand to 80% width

## Browser Support

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

**Minimum Requirements:**
- ES6 JavaScript support
- CSS3 features (flexbox, grid, variables)
- Modern DOM APIs

## Performance

### File Sizes
- `chatbot.js`: ~23KB (uncompressed)
- `chatbot.css`: ~12KB (uncompressed)
- **Total**: ~35KB

### Optimization Tips
1. Enable GZIP compression on server
2. Minify files for production
3. Load chatbot script with `defer` attribute
4. Consider lazy-loading for below-fold pages

### Performance Characteristics
- Initial load: < 50ms
- Message processing: < 100ms
- Typing animation: 1 second (configurable)
- Smooth 60fps animations

## Troubleshooting

### Chatbot Not Appearing
1. Check if CSS file is loaded (inspect network tab)
2. Check if JS file is loaded without errors (console)
3. Verify file paths are correct
4. Ensure scripts load after DOM is ready

### Styling Conflicts
1. Check for CSS specificity issues
2. Verify chatbot CSS is loaded after main styles
3. Use browser DevTools to inspect elements
4. Check for z-index conflicts (chatbot uses z-index: 999)

### Messages Not Matching
1. Verify FAQ keywords cover user's query terms
2. Add more keyword variations
3. Check keyword spelling in FAQ database
4. Lower matching threshold if too strict

### Mobile Issues
1. Test viewport meta tag is present
2. Check for fixed positioning conflicts
3. Verify touch events work properly
4. Test on actual devices, not just emulators

## Advanced Customization

### Adding Timestamps

To show timestamps on all messages, modify the `addMessage` function:

```javascript
function addMessage(text, type = 'bot', showTime = true) {  // Change default to true
    // ... existing code
}
```

### Local Storage Integration

To save chat history across page reloads, add to `js/chatbot.js`:

```javascript
// Save messages to localStorage
function saveMessages() {
    localStorage.setItem('chatbot_messages', JSON.stringify(chatState.messages));
}

// Load messages from localStorage
function loadMessages() {
    const saved = localStorage.getItem('chatbot_messages');
    if (saved) {
        chatState.messages = JSON.parse(saved);
        // Re-render messages...
    }
}
```

### Custom Welcome Message Based on Page

```javascript
function showWelcomeMessage() {
    let welcomeMsg = config.welcomeMessage;
    
    // Customize based on current page
    if (window.location.pathname.includes('services')) {
        welcomeMsg = 'Welcome! Looking for information about our services? I can help!';
    } else if (window.location.pathname.includes('contact')) {
        welcomeMsg = 'Need to contact us? I can provide our contact details right away!';
    }
    
    addMessage(welcomeMsg, 'bot');
}
```

### Analytics Integration

Track chatbot usage:

```javascript
function handleUserMessage(userMessage) {
    // Track with your analytics tool
    if (typeof gtag !== 'undefined') {
        gtag('event', 'chatbot_interaction', {
            'event_category': 'Chatbot',
            'event_label': userMessage
        });
    }
    
    // ... rest of function
}
```

## Security Considerations

### XSS Prevention
- User messages are rendered using `textContent` instead of `innerHTML` to prevent XSS attacks
- Bot messages use `innerHTML` to allow formatting (e.g., `<br>` tags), but only trusted content from the FAQ database is used
- In `js/chatbot.js`, the `addMessage()` function checks the message type and uses `textContent` for user input
- Never insert unsanitized user input via `innerHTML`

### Privacy
- No data is sent to external servers
- All processing happens client-side
- No cookies or tracking (unless you add it)

## Maintenance

### Regular Updates
- Review FAQ database quarterly
- Add new questions based on user queries
- Update contact information as needed
- Refresh quick replies based on analytics

### Content Guidelines
- Keep answers up-to-date
- Test new FAQ entries before deploying
- Ensure contact information is current
- Review for clarity and accuracy

## Demo Page

A full demo page is available at `chatbot-demo.html` which includes:
- Live chatbot functionality
- Feature explanations
- Integration instructions
- Customization examples
- Technical specifications

## Support and Customization

For questions or custom features:
- Email: info@sysandnet.com
- Phone: +91 96232 68939

## Version History

**Version 1.0** (Current)
- Initial release
- Core chatbot functionality
- FAQ database with 20+ entries
- Responsive design
- Keyboard accessibility
- Full offline support

---

**Last Updated**: December 2024  
**Author**: Systems & Networks Development Team
