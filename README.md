# CV Application Builder
A React-based CV application builder that allows users to create and preview their CV in real-time.

## Features
- **Two-Column Layout**: Builder on the left, live preview on the right
- **Real-time Preview**: See changes instantly as you type
- **Multiple Sections**: Personal Info, Experience, Education, and Skills
- **Form Validation**: Ensure data integrity with built-in validation

## Architecture
### Component Structure
```
src/
├── components/           # Reusable UI components
│   ├── PersonalInfo.jsx  # Personal details form
│   ├── Experience.jsx    # Work experience form
│   ├── Education.jsx     # Education history form
│   ├── Skill.jsx         # Skills section form
│   └── CVPreview.jsx     # Live CV preview
├── hooks/                # Custom React hooks
│   └── useCVData.js      # CV data state management
├── utils/                # Utility functions
│   └── validation.js     # Form validation helpers
└── styles/               # CSS modules and global styles
    ├── variables.css     # CSS custom properties
    ├── reset.css         # CSS reset
    ├── main.css          # Global styles
    ├── CVBuilder.css     # Builder section styles
    └── CVPreview.css     # Preview section styles
```

### Data Flow
1. **State Management**: Central CV data managed by `useCVData` hook
2. **Component Communication**: Props for data and callbacks for updates
3. **Live Updates**: State changes trigger immediate preview updates
4. **Validation**: Real-time validation with error feedback

## Getting Started
```bash
npm install
npm run dev
```

## Development Plan
[x] Project setup and structure
[x] README and architecture documentation
[x] Basic layout (2-column design)
[ ] Custom hook for state management
[x] Personal Info component
[x] Experience component
[x] Education component
[x] Skills component
[ ] CV Preview component
[ ] Styling
[ ] Form validation
[ ] Data persistence (localStorage)
