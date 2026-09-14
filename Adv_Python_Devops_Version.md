# Advance Python with Dutta — DevOps Version

**Prerequisite:** Course 1 (Python with Dutta — Core Fundamentals) complete.
**Goal:** Take a Python programmer into automation, infrastructure, cloud, and ops tooling — writing scripts and tools that manage real systems (servers, containers, clusters, pipelines).

This is a sibling track to "Advance Python with Dutta (Data Science Version)" — same prerequisite, different specialization branch.

---

### Module 1 — Python for System Automation
1. `os` & `sys` deep dive (env vars, exit codes, platform detection)
2. `subprocess` — running shell commands from Python, capturing output
3. `shutil` — file/directory automation (copy, move, archive)
4. Working with `pathlib` for cross-platform scripting
5. Writing your first automation script (e.g., log cleanup / backup script)

### Module 2 — Building CLI Tools
1. `argparse` — building proper command-line interfaces
2. `click` — a more modern/ergonomic CLI framework
3. Reading config files: YAML, TOML, `.env` / `python-dotenv`
4. Packaging a script as an installable CLI tool
5. Mini project: a CLI tool that wraps a repetitive ops task

### Module 3 — Working with APIs & Web Services
1. `requests` — GET/POST, headers, auth, error handling
2. Consuming REST APIs (pagination, retries, rate limits)
3. Webhooks basics — receiving events
4. `httpx` for async API calls (bridge to Module 6)
5. Mini project: a script that polls a service's health API and alerts on failure

### Module 4 — Infrastructure & Cloud SDKs
1. AWS automation with `boto3` (S3, EC2, ECR basics)
2. Working with credentials & IAM roles safely (env vars, profiles)
3. Terraform/Ansible vs Python — when to script instead of use IaC tools
4. Paramiko / Fabric — SSH automation to remote servers
5. Mini project: a script to pull ECR image tags / check pull secret expiry — *ties directly into real pipeline troubleshooting*

### Module 5 — Kubernetes & Containers with Python
1. Docker SDK for Python — building/running containers programmatically
2. `kubernetes` Python client — reading pods, deployments, logs
3. Automating routine kubectl-style checks (e.g., ImagePullBackOff scanning)
4. Interacting with GitOps tools (Flux/ArgoCD) via their APIs or CLIs wrapped in Python
5. Mini project: a script that scans a cluster for failing pods and summarizes root causes

### Module 6 — Asynchronous & Parallel Python for Ops
1. Multithreading vs multiprocessing for ops workloads (parallel SSH, parallel API polling)
2. `async` / `await` for concurrent API/log calls
3. Async I/O basics (`asyncio`)
4. When to use each — decision framework for automation scripts specifically

### Module 7 — Testing, Logging & Reliability
1. `logging` deep dive — structured logging, log levels, JSON logs for aggregation
2. Writing tests for scripts with `pytest`
3. Error handling patterns for long-running/scheduled scripts
4. Retry logic & idempotency in automation code
5. Alerting basics — sending Slack/email notifications from scripts

### Module 8 — CI/CD & Scripting for Pipelines
1. Writing Python steps for CI/CD pipelines (GitHub Actions / GitLab CI / Jenkins)
2. Environment-specific config management (dev/staging/prod)
3. Secrets management basics (avoiding hardcoded credentials)
4. Building a small internal tool: a deployment health-check script run post-deploy

### Module 9 — Security & Hardening Basics for Scripts
1. Avoiding common script vulnerabilities (shell injection via `subprocess`)
2. Secure secret handling (`.env`, vaults, avoiding plaintext creds)
3. Least-privilege thinking when scripting against cloud/cluster APIs

### 🎓 Course Capstone Ideas
- A cluster-health CLI tool: scans pods/deployments, flags issues (ImagePullBackOff, CrashLoopBackOff), posts a summary to Slack
- An ECR/registry auditor: checks pull secret expiry across nodes and reports which nodes can/can't reach a registry
- A GitOps drift-checker: diffs desired state (Git) vs actual cluster state and reports mismatches
- A parallel SSH-based patch/update runner across a fleet of servers

---

### 📝 Notes
- This track deliberately reuses Module patterns from the Data Science version (NumPy/Pandas → boto3/k8s client, Matplotlib/Seaborn → CLI/alerting) so both "Advance" courses feel like a matched pair once someone finishes Course 1.
- Capstones lean toward realistic Kubernetes/Rancher/GitOps troubleshooting scenarios (pod failures, registry auth issues) rather than generic toy examples, since that's the kind of problem this content tends to be most useful for.