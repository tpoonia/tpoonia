<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=7B5CFF&height=120&section=header&text=Tushar%20Poonia&fontSize=42&fontColor=ffffff&fontAlignY=55&desc=Software%20Developer%20%C2%B7%20AI%20Engineer%20%C2%B7%20MS%20Artificial%20Intelligence&descAlignY=78&descSize=14&descColor=ccbbff" width="100%"/>

</div>

<br/>

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Tushar%20Poonia-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/tushar-poonia-4623a829a)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live%20Site-7B5CFF?style=for-the-badge&logo=vercel&logoColor=white)](https://poonia2000tushar-wq.github.io/Portfolio/)
[![Email](https://img.shields.io/badge/Email-tpoonia@mail.yu.edu-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:tpoonia@mail.yu.edu)
[![Location](https://img.shields.io/badge/Jersey%20City%2C%20NJ-📍-00D4AA?style=for-the-badge)](#)

</div>

---

## 👋 About Me

I'm a **Software Developer & AI Engineer** with **3+ years at Tata Consultancy Services** building enterprise-grade APIs and data pipelines for global banking clients. Now pursuing an **M.S. in Artificial Intelligence** at Yeshiva University (GPA 3.8), I bridge production backend engineering with applied machine learning.

- 🏦 Built systems processing **100M+ rows/day** for CTBC Bank (Taiwan) & ING Bank (Netherlands)
- 🔌 Designed **60+ REST APIs** across 8+ distributed banking platforms
- 📈 Increased real-time analytics throughput by **40%** via optimized ML data pipelines
- 🏆 **Employee of the Month — 3×** · **Client Appreciation Award**
- 🎓 **M.S. AI** @ Yeshiva University · **M.Sc. CS (AI & ML Honors)** @ Pune University

---

## 🛠 Tech Stack

**Languages**

![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?style=flat-square&logo=r&logoColor=white)

**ML & AI**

![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![LangGraph](https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logo=langchain&logoColor=white)

**Backend & Data**

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Oracle](https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=oracle&logoColor=white)

**Cloud & DevOps**

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white)
![GCP](https://img.shields.io/badge/GCP-4285F4?style=flat-square&logo=googlecloud&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white)

---

## 🚀 Featured Projects

---

### 🔍 Explainable Credit Risk Model

> **Regulatory-grade loan default prediction with full audit transparency using ensemble ML + SHAP/LIME.**

<table>
<tr><td><b>📊 Dataset</b></td><td>50,000+ loan records</td><td><b>🎯 Accuracy</b></td><td><b>92%</b></td></tr>
<tr><td><b>📈 AUC-ROC</b></td><td><b>0.96</b></td><td><b>⏱️ Audit time saved</b></td><td><b>↓ 40%</b></td></tr>
</table>

**What it does:** Predicts loan default risk while providing human-readable explanations for every decision — built for compliance teams who need to understand *why*, not just *what*.

**Technical highlights:**
- Trained and benchmarked XGBoost, Random Forest & Logistic Regression; XGBoost achieved best AUC-ROC at **0.96**
- Integrated **SHAP** summary plots and waterfall charts for global feature importance and local instance explanations
- **LIME** explanations surface per-prediction reasoning for regulatory compliance audits
- Automated explanation report generation reduced manual auditor review time by **40%**
- Feature engineering included credit utilization ratios, payment history aggregates, and delinquency windows

**Models:** `XGBoost` `Random Forest` `Logistic Regression`  
**Explainability:** `SHAP` `LIME`  
**Stack:** `Python` `Scikit-learn` `Pandas` `Matplotlib` `Seaborn`

---

### 🏥 Medical Disease Prediction System

> **Multi-disease classifier with 98% recall — engineered to minimize missed diagnoses.**

<table>
<tr><td><b>📊 Dataset</b></td><td>20,000+ patient records</td><td><b>🎯 Accuracy</b></td><td><b>95%</b></td></tr>
<tr><td><b>🔴 Recall</b></td><td><b>98%</b></td><td><b>✅ False negatives</b></td><td><b>↓ 18%</b></td></tr>
<tr><td><b>🔬 Features built</b></td><td>30+ clinical features</td><td></td><td></td></tr>
</table>

**What it does:** Classifies multiple diseases from structured patient records — with recall as the primary metric, because in clinical settings a missed diagnosis is far more costly than a false alarm.

**Technical highlights:**
- Engineered **30+ domain-informed clinical features**: vitals, lab ratios, symptom composites, and temporal deltas
- Achieved **98% recall** through threshold calibration prioritized over raw accuracy
- Reduced false negatives by **18%** vs baseline via threshold tuning and weighted ensemble voting
- Benchmarked SVM, Random Forest, and Neural Networks per disease target; best model selected via cross-validation
- Applied SMOTE oversampling to handle class imbalance in rare-condition subsets

**Models:** `SVM` `Random Forest` `Neural Networks`  
**Stack:** `Python` `Scikit-learn` `TensorFlow` `Keras` `Pandas` `NumPy` `Seaborn`

---

### 🧬 Genetic Algorithm Optimizer (Knapsack)

> **Evolutionary solver achieving 97% optimal rate — 60× faster than brute-force in 50 generations.**

<table>
<tr><td><b>🔢 Search space</b></td><td>1,000+ combinations</td><td><b>🏆 Optimal rate</b></td><td><b>97%</b></td></tr>
<tr><td><b>⚡ Speed gain</b></td><td><b>60× vs brute-force</b></td><td><b>📉 Convergence</b></td><td><b>45% faster</b></td></tr>
<tr><td><b>🔄 Generations</b></td><td>50</td><td></td><td></td></tr>
</table>

**What it does:** Solves the 0/1 Knapsack problem at scale using a full evolutionary pipeline — population initialization, fitness evaluation, tournament selection, uniform crossover, and bit-flip mutation.

**Technical highlights:**
- Implemented complete GA pipeline in DEAP: init → selection → crossover → mutation → elitism
- **97% optimal solution rate** across 1,000+ item combinations within 50 generations
- Adaptive tuning of population size, crossover rate, and mutation probability yielded **45% faster convergence**
- **60× speed improvement** over exhaustive brute-force through evolutionary pruning of the search space
- Fitness landscape visualization to track convergence and detect premature stagnation

**Algorithm:** `DEAP Genetic Algorithm` (selection · crossover · mutation)  
**Stack:** `Python` `DEAP` `NumPy` `Matplotlib`

---

### 🤖 LangGraph AI Agent

> **Stateful multi-step autonomous agent with conditional re-planning and tool execution.**

<table>
<tr><td><b>🧠 Framework</b></td><td>LangGraph</td><td><b>🔄 Architecture</b></td><td>Multi-node DAG</td></tr>
<tr><td><b>🔀 Routing</b></td><td>Conditional edges</td><td><b>👤 Oversight</b></td><td>HITL checkpoints</td></tr>
</table>

**What it does:** An autonomous agent that decomposes high-level goals into sub-tasks, invokes external tools, and dynamically re-plans based on intermediate outcomes — with human-in-the-loop approval on critical steps.

**Technical highlights:**
- Designed a **stateful LangGraph pipeline** with distinct planning, tool-calling, and self-reflection nodes
- **Conditional edge routing** allows the agent to dynamically re-plan mid-execution based on tool results
- Agent autonomously decomposes natural-language goals into sequential, executable sub-tasks
- **Human-in-the-loop (HITL)** checkpoints interrupt execution for human approval on high-stakes actions
- LangSmith integration for tracing, debugging, and monitoring agent execution flows

**Stack:** `Python` `LangGraph` `LangChain` `OpenAI API` `LangSmith`

---

## 📊 GitHub Stats

<div align="center">

<img height="160" src="https://github-readme-stats.vercel.app/api?username=poonia2000tushar-wq&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0a0a0f&title_color=7B5CFF&icon_color=00D4AA&text_color=f0eefc&ring_color=7B5CFF" />
<img height="160" src="https://github-readme-stats.vercel.app/api/top-langs/?username=poonia2000tushar-wq&layout=compact&theme=tokyonight&hide_border=true&bg_color=0a0a0f&title_color=7B5CFF&text_color=f0eefc" />

</div>

<div align="center">

[![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=poonia2000tushar-wq&theme=tokyonight&hide_border=true&background=0a0a0f&ring=7B5CFF&fire=00D4AA&currStreakLabel=7B5CFF)](https://github.com/poonia2000tushar-wq)

</div>

---

## 💼 Experience

| Period | Role | Company |
|---|---|---|
| Jun 2022 – Aug 2025 | Software Product Developer | Tata Consultancy Services · CTBC Bank |
| Dec 2021 – May 2022 | Assistant Software Engineer | Tata Consultancy Services · ING Bank |

---

## 🎓 Education

| Degree | Institution | GPA |
|---|---|---|
| M.S. Artificial Intelligence *(2025–2027)* | Yeshiva University, NY | 3.8 |
| M.Sc. Computer Science — AI & ML Honors | Savitribai Phule Pune University | 3.63 |
| B.Sc. Computer Science — Honors | Savitribai Phule Pune University | 3.4 |

---

<div align="center">

*Open to roles in Backend Engineering · ML Engineering · Applied AI*

[![Portfolio](https://img.shields.io/badge/View%20Portfolio-7B5CFF?style=for-the-badge&logo=vercel&logoColor=white)](https://poonia2000tushar-wq.github.io/Portfolio/)

<img src="https://capsule-render.vercel.app/api?type=waving&color=7B5CFF&height=80&section=footer" width="100%"/>

</div>
