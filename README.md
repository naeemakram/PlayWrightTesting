# Playwright Testing Demo Repository

A comprehensive **Playwright end-to-end testing** demonstration repository showcasing real-world test automation patterns, best practices, and advanced features. This project serves as a practical learning resource for mastering **cross-browser testing**, **UI automation**, and **modern web testing techniques** with Playwright.

## 🎯 What is this Repository About?

This repository is a **hands-on Playwright tutorial** that demonstrates essential test automation concepts through practical examples. It showcases how to build robust, maintainable end-to-end tests using Microsoft's Playwright framework against a real test application hosted at `https://testautomationdemo.replit.app`.

### Key Features Demonstrated:
- ✅ **Cross-browser testing** (Chromium, Firefox, WebKit)
- ✅ **Modern locator strategies** using role-based selectors
- ✅ **Custom fixtures and test setup** patterns
- ✅ **Dialog and alert handling** techniques
- ✅ **iframe interaction** and nested frame testing
- ✅ **Visual testing** and screenshot comparison
- ✅ **Soft assertions** for comprehensive validation
- ✅ **Test isolation** and browser context management
- ✅ **Page Object Model** alternatives with fixtures

## 🚀 Why This Repository Will Help You Learn Playwright

### 1. **Real-World Examples**
Unlike basic tutorials, this repository provides practical test scenarios you'll encounter in actual projects:
- User authentication flows
- Form interactions and validations
- Complex UI element handling
- Multi-step user journeys

### 2. **Progressive Learning Path**
The test files are structured to build your knowledge incrementally:
- Start with basic assertions and interactions
- Progress to advanced fixtures and custom test setup
- Master complex scenarios like iframe handling and dialog management

### 3. **Best Practices Implementation**
Learn industry-standard practices:
- **Stable locator strategies** using accessibility roles
- **Test isolation** with proper setup/teardown
- **Maintainable test architecture** with custom fixtures
- **Effective assertion patterns** including soft assertions

### 4. **Production-Ready Patterns**
All examples follow patterns suitable for enterprise test suites:
- Configurable test environments
- Parallel test execution
- Comprehensive reporting
- CI/CD integration ready

## 📁 Test File Overview

| Test File | Concepts Demonstrated | Learning Focus |
|-----------|----------------------|----------------|
| `assertions.spec.ts` | Hard/soft assertions, element visibility, attribute validation | **Test assertions**, auto-retry mechanisms |
| `built-in-fixtures.spec.ts` | Page, browser fixtures, multiple contexts | **Playwright fixtures**, browser context isolation |
| `custom-fixture.spec.ts` | Custom fixture creation, pre-authenticated sessions | **Advanced test setup**, reusable test components |
| `dialogs.spec.ts` | Alert/confirm/prompt handling, event listeners | **Dialog management**, browser event handling |
| `iframe.spec.ts` | Frame locators, cross-frame interactions | **iframe testing**, nested frame navigation |
| `interactions.login.test.ts` | Form filling, button clicks, navigation | **Basic interactions**, login automation |
| `multiple-elements.spec.ts` | Element collections, list handling | **Multiple element testing**, dynamic content |
| `soft.dashboard.spec.ts` | Soft assertions, test hooks (beforeEach) | **Flexible assertions**, test lifecycle management |
| `contexts.spec.ts` | Browser context management, isolation | **Test isolation**, context switching |
| `describe.spec.ts` | Test organization, grouping | **Test structure**, organization patterns |
| `nested-frames.spec.ts` | Complex frame hierarchies | **Advanced frame handling** |

## 🛠 How to Use This Repository

### Prerequisites
- **Node.js** (version 20.x, 22.x, or 24.x)
- **npm**, **yarn**, or **pnpm**
- **Git** for cloning the repository

### Installation Steps

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/naeemakram/PlayWrightTesting.git
   cd PlayWrightTesting
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Install Playwright browsers:**
   ```powershell
   npx playwright install
   ```

### Learning Approach

1. **Start with Basic Tests:**
   - Begin with `interactions.login.test.ts` for fundamental concepts
   - Move to `assertions.spec.ts` to understand validation patterns

2. **Progress to Advanced Features:**
   - Explore `custom-fixture.spec.ts` for reusable test components
   - Study `dialogs.spec.ts` for event handling

3. **Master Complex Scenarios:**
   - Examine `iframe.spec.ts` for nested frame interactions
   - Review `soft.dashboard.spec.ts` for flexible assertion strategies

## 🧪 How to Run Tests

### Run All Tests
```powershell
npx playwright test
```

### Run Tests in Headed Mode (See Browser)
```powershell
npx playwright test --headed
```

### Run Specific Test File
```powershell
npx playwright test tests/interactions.login.test.ts
```

### Run Tests in UI Mode (Interactive)
```powershell
npx playwright test --ui
```

### Run Tests for Specific Browser
```powershell
npx playwright test --project=chromium
```

### Generate and View HTML Report
```powershell
npx playwright show-report
```

### Debug Tests
```powershell
npx playwright test --debug
```

## 📊 Test Configuration

The `playwright.config.ts` file demonstrates production-ready configuration:

- **Test Directory:** `./tests`
- **Parallel Execution:** Enabled for faster test runs
- **Browser Support:** Chromium (with Firefox/WebKit commented for easy activation)
- **Base URL:** `https://testautomationdemo.replit.app`
- **Tracing:** Enabled on first retry for debugging
- **HTML Reporter:** Comprehensive test reporting
- **CI/CD Ready:** Optimized for continuous integration

## 🔧 Tools and Technologies

### Core Framework
- **[Playwright](https://playwright.dev/)** - Modern end-to-end testing framework
- **TypeScript** - Type-safe test development
- **Node.js** - JavaScript runtime environment

### Testing Features
- **Cross-Browser Testing** - Chromium, Firefox, WebKit support
- **Visual Testing** - Screenshot comparison capabilities
- **Mobile Testing** - Device emulation ready
- **API Testing** - HTTP request/response testing support

### Development Tools
- **VS Code Integration** - Playwright extension support
- **Debug Mode** - Step-through debugging
- **Trace Viewer** - Visual test execution analysis
- **HTML Reporter** - Rich test result dashboard

### CI/CD Integration
- **GitHub Actions Ready** - Automated test execution
- **Docker Support** - Containerized test environments
- **Parallel Execution** - Optimized for CI pipelines

## 📝 Key Learning Outcomes

After working through this repository, you'll master:

1. **Modern Locator Strategies**
   - Role-based selectors (`getByRole`)
   - Accessibility-first approach
   - Stable element identification

2. **Test Architecture Patterns**
   - Custom fixtures for reusable setup
   - Page Object Model alternatives
   - Test isolation techniques

3. **Advanced Testing Scenarios**
   - Dialog and popup handling
   - iframe and nested frame testing
   - File upload and download testing

4. **Professional Test Practices**
   - Soft vs hard assertions
   - Test data management
   - Error handling and debugging

5. **Performance and Reliability**
   - Auto-waiting mechanisms
   - Retry strategies
   - Flaky test prevention

## 🌐 Test Application

The tests run against a dedicated demo application at `https://testautomationdemo.replit.app` which includes:
- User authentication system
- Interactive forms and controls
- iframe payment simulation
- Dialog and popup demonstrations
- Dashboard with various UI elements

## 📚 Additional Resources

- **[Official Playwright Documentation](https://playwright.dev/docs/)**
- **[Playwright API Reference](https://playwright.dev/docs/api/class-playwright)**
- **[Best Practices Guide](https://playwright.dev/docs/best-practices)**
- **[Microsoft Learn Playwright Training](https://learn.microsoft.com/en-us/training/modules/build-with-playwright/)**

## 🤝 Contributing

This repository is designed for learning purposes. Feel free to:
- Fork and experiment with the code
- Add new test scenarios
- Improve existing examples
- Share your learning experiences

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 🏷 Keywords

`playwright`, `end-to-end-testing`, `e2e-testing`, `test-automation`, `cross-browser-testing`, `typescript`, `ui-testing`, `web-testing`, `selenium-alternative`, `microsoft-playwright`, `test-framework`, `automated-testing`, `quality-assurance`, `ci-cd`, `testing-tutorial`, `playwright-demo`, `web-automation`, `browser-testing`, `test-driven-development`