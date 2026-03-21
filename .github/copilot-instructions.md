# AI Coding Agent Instructions for workboard-app

## Project Overview
**workboard-app** is a collaborative wordboard application enabling real-time co-creation with friends. The project follows a classic monorepo structure with distinct frontend and backend services.

## Architecture

### Directory Structure
- `/backend` - Backend service (API, business logic)
- `/frontend` - Frontend application (UI, client-side logic)
- `/README.md` - Project root documentation

### Tech Stack & Setup
⚠️ **Note**: Backend and frontend directories are currently empty placeholders. When initializing:
- Confirm technology choices with existing team conventions (e.g., React/Vue for frontend, Node/Python for backend)
- Reference any shared architectural documentation in `.github/` or team wikis

## Development Workflow

### Initial Setup Steps
1. Populate backend and frontend directories with scaffolding
2. Define package.json/requirements.txt for dependency management
3. Create build scripts (dev, production, testing)
4. Document any environment variable requirements

### Before Starting Implementation
- Check if there are environment setup guides or CI/CD configurations in `.github/workflows/`
- Look for Dockerfile or docker-compose.yml for containerized development
- Review any existing TypeScript configs (tsconfig.json) or linters (.eslintrc, .prettierrc)

## Key Patterns & Conventions
*To be discovered and documented once backend/frontend are initialized with code.*

## Critical Dependencies & Integration Points
- **Frontend-Backend Communication**: Clarify API contract (REST, GraphQL, WebSockets for real-time collaboration)
- **Collaborative Features**: Real-time synchronization mechanism (WebSockets, operational transformation, conflict resolution)
- **Data Persistence**: Database choice and schema design

## Quick Command Reference
*Create a Makefile or document common commands once development setup is complete:*
- `npm run dev` / `python -m uvicorn` (development servers)
- `npm test` / `pytest` (testing)
- `npm build` / `python -m pip install -e .` (production builds)

---
**Last Updated**: March 20, 2026  
**Status**: Initial scaffold - awaiting backend/frontend implementation details
