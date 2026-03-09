---
layout: post
title: "karpathy/autoresearch: What Does It Do?"
date: 2026-03-09 20:00:00
description: A deep dive into Andrej Karpathy's autoresearch project — an autonomous AI agent that runs LLM training experiments overnight and iterates toward better models without human intervention.
tags: agentic-ai llm autonomous-research
categories: ai-research
related_posts: false
---

## Overview

[`karpathy/autoresearch`](https://github.com/karpathy/autoresearch) is an open-source project by Andrej Karpathy that sets up an **autonomous AI research loop** for language model training. The core idea is disarmingly simple: give an AI coding agent a small but real LLM training setup, let it experiment autonomously overnight, and wake up to a log of experiments and (hopefully) a better model — all without you touching a single Python file.

> "The idea: give an AI agent a small but real LLM training setup and let it experiment autonomously overnight. It modifies the code, trains for 5 minutes, checks if the result improved, keeps or discards, and repeats."
>
> — Andrej Karpathy

---

## The Autonomous Research Loop

The agent follows a tight, repeatable loop:

1. **Modify** — The agent edits `train.py` (model architecture, hyperparameters, optimizer, batch size, etc.)
2. **Train** — A training run executes for exactly **5 minutes** of wall-clock time
3. **Evaluate** — The metric `val_bpb` (validation bits per byte) is computed — lower is better
4. **Accept or Discard** — If `val_bpb` improved, the change is kept; otherwise it is reverted
5. **Repeat** — The loop continues, accumulating ~12 experiments per hour, ~100 experiments overnight

This is essentially **automated hypothesis testing for neural architecture search**, but with a general-purpose code-editing agent rather than a hand-engineered search procedure.

---

## Project Structure

The repository is deliberately minimal — only three files matter:

| File         | Role                                           | Who edits it |
| ------------ | ---------------------------------------------- | ------------ |
| `prepare.py` | Data prep, tokenizer training, eval utilities  | Nobody       |
| `train.py`   | GPT model, Muon+AdamW optimizer, training loop | The AI agent |
| `program.md` | Agent instructions ("research org code")       | The human    |

The human's job shifts from writing Python to writing `program.md` — the Markdown file that defines the agent's strategy, constraints, and goals. This is described as "programming the research org" rather than programming the model.

---

## Why `val_bpb`?

The metric chosen — **validation bits per byte** — has two useful properties for automated research:

- **Vocabulary-size independent**: architectural changes that alter the vocabulary size are still fairly compared
- **Fixed time budget**: all experiments run for exactly 5 minutes regardless of model size or hardware, making runs directly comparable

The tradeoff is that results are **platform-specific**: an H100 will explore a very different area of the architecture space than a consumer GPU in the same 5 minutes.

---

## Design Principles

### 1. Single file to modify

The agent only edits `train.py`. This keeps diffs small and reviewable, and prevents the agent from accidentally breaking data loading or evaluation logic.

### 2. Fixed time budget

A hard 5-minute wall-clock budget (excluding startup/compilation) means every experiment is equivalent regardless of what the agent changes. This is analogous to fixing a compute budget rather than a number of gradient steps.

### 3. Self-contained

No distributed training, no complex configs, no external services. One GPU, one file, one metric. The simplicity is intentional — it makes the system auditable and easy to fork.

### 4. Human programs strategy, agent programs model

`program.md` separates the human's high-level research intent from the agent's low-level implementation decisions. Iterating on `program.md` is how you guide the research direction; iterating on `train.py` is what the agent does automatically.

---

## How to Run It

```bash
# Install uv (once)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies
uv sync

# One-time data preparation (~2 min)
uv run prepare.py

# Single manual experiment (~5 min)
uv run train.py
```

Once the setup works, point any coding agent (Claude, Codex, etc.) at the repo, disable file-system permissions outside the project, and prompt:

```
Have a look at program.md and kick off a new experiment.
```

---

## Why This Matters for Agentic AI Research

From an **agentic AI** perspective, `autoresearch` is an interesting case study because:

- It demonstrates **tool-use grounding**: the agent's actions are grounded in real training runs with measurable outcomes, not just text generation.
- It shows **minimal scaffolding**: there is no complex orchestration framework — just a Markdown file and a training script.
- It implements a **closed-loop reward signal**: the agent receives concrete feedback (val_bpb) after each action, enabling genuine trial-and-error learning at the meta-level.
- It raises questions about **human-in-the-loop research**: the human's role becomes designing the evaluation protocol and the agent's instruction set, rather than running experiments directly.

For researchers working at the intersection of LLMs, autonomous agents, and scientific discovery, this project is a concrete, reproducible baseline worth studying.

---

## Further Reading

- [karpathy/autoresearch on GitHub](https://github.com/karpathy/autoresearch)
- [Karpathy's announcement tweet](https://x.com/karpathy/status/2029701092347630069)
- [nanochat (parent repo)](https://github.com/karpathy/nanochat) — the LLM training codebase autoresearch is built on
