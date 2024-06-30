# GitHub Actions

This repository contains two GitHub Actions: **AI Code Reviewer** and **CI**.

## AI Code Reviewer

- **Trigger**: Activated on pull requests when they are opened or synchronized.
- **Function**: Uses an AI model to review code changes and provide feedback.
- **Excludes**: Reviews all files except those with `.json` and `.md` extensions.
- **Key Steps**:
  - Checks out the repository.
  - Runs the AI Code Reviewer using the specified model and tokens.

## CI (Continuous Integration)

- **Trigger**: Activated on every push.
- **Function**: Sets up the environment, installs dependencies, and runs tests.
- **Key Steps**:
  - Checks out the repository.
  - Sets up Bun (a fast JavaScript runtime).
  - Installs modules and runs tests using Bun.

## Setup

Ensure that the following secrets are added to your repository:
- `OPENAI_API_KEY`
