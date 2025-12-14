# ai-development-lab

Experimental lab to design and validate a fully AI-driven software development pipeline, covering architecture, code generation, versioning, reviews, testing, CI/CD, and deployment, with human oversight and continuous improvement.

## Development Rules

All code in this project must strictly follow Clean Code and Clean Architecture principles.

### Mandatory Rules

- Clear separation of layers (domain, application, infrastructure, interface).
- No business logic in controllers, routes, or UI components.
- Explicit naming for variables, functions, classes, and files.
- Small, focused functions with single responsibility.
- No premature abstractions.
- Favor composition over inheritance.
- No tight coupling between layers.
- Side effects must be isolated.
- Code must be readable without comments whenever possible.

### Engineering Standards

- Prioritize maintainability, scalability, and testability.
- Avoid overengineering and unnecessary complexity.
- Prefer incremental, evolvable solutions.
- Follow framework and language best practices consistently.
- Any architectural, database, or core flow change must be explicitly approved before implementation by the project owner or explicitly requested in the task or prompt.

When generating Pull Requests or descriptions, these rules must be respected and explicitly acknowledged when relevant.

**Violations of these rules are considered defects, not style preferences.**

## Pull Request Process

When creating a Pull Request, please follow the template that includes:

- Clear and objective title and description
- Context and motivation for the change
- Type of change (Feature, Bugfix, Refactor, Infrastructure/DevOps, Documentation, Other)
- Architectural impact assessment
- Testing instructions
- Checklist verification (Clean Code, Clean Architecture, lint, build, CI)

## Continuous Integration

The project includes a CI workflow that runs on pull requests to `main` and `develop` branches:

- Code checkout
- Node.js setup
- Dependency installation
- Linting
- Build verification
- Code review automation
