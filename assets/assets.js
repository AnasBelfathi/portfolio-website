import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpeg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import mistral from './mistral.png';
import openai from './openai_2.png';
import llama from './meta.png';
import deepseek from './DeepSeek.png';
import claude from './claude.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    mistral,
    openai,
    llama,
    deepseek,
    claude,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
  {
    title: 'LLM Domain Adaptation (Healthcare)',
    description: 'Continual pretraining + PEFT',
    bgImage: '/work-1.png',
  },
  {
    title: 'RAG for Specialized Knowledge',
    description: 'Hybrid search & query routing',
    bgImage: '/work-2.png',
  },
  {
    title: 'Evaluation & Safety Harness',
    description: 'Hallucination, bias, toxicity tests',
    bgImage: '/work-3.png',
  },
  {
    title: 'Efficient Fine‑Tuning & Distillation',
    description: 'Quantization & model serving',
    bgImage: '/work-4.png',
  },
];

export const serviceData = [
  {
    icon: assets.web_icon, // réutilise tes icônes existantes
    title: 'LLM Domain Adaptation',
    description:
      'PEFT (LoRA/Adapters), continual pretraining & instruction tuning to adapt LLMs to legal/health/finance.',
    link: '#contact',
  },
  {
    icon: assets.mobile_icon,
    title: 'RAG Architecture & Retrieval',
    description:
      'Indexing, hybrid search, query routing, grounding—and rigorous relevance evaluation.',
    link: '#contact',
  },
  {
    icon: assets.ui_icon,
    title: 'Evaluation & Safety (Red Teaming)',
    description:
      'Adversarial prompts, hallucination/bias/toxicity checks, ablations and model cards.',
    link: '#contact',
  },
  {
    icon: assets.graphics_icon,
    title: 'Efficient Fine‑Tuning & Serving',
    description:
      'Distillation, quantization, MoE routing, throughput/latency optimization for production.',
    link: '#contact',
  },
];


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Text classification',
    description: 'Labeling and routing specialized documents with adapted LLMs'
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Summarization',
    description: 'Domain-aware, factual summaries for research & industry'
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Information retrieval",
    description: "LLM-assisted search and RAG for specialized knowledge"
  }
];


export const toolsData = [
    assets.openai, assets.mistral, assets.llama, assets.deepseek, assets.claude
];


export const conferenceData = [
  {
    title: "ACL 2025 — Vienna",
    role: "Speaker",
    venue: "TALN",
    year: "2025",
    topic: "Rhetorical role labeling in long legal documents",
    photo: "./acl.jpg",
    slides: "/slides/TALN2024_Anas.pdf", // optionnel
    video: ""                            // optionnel
  },
  {
    title: "COLING 2025 — Abu Dhabi",
    role: "Presenter",
    venue: "COLING",
    year: "2025",
    topic: "Domain adaptation of LLMs for specialized corpora",
    photo: "/conf-coling-2025.jpg",
    slides: "",
    video: "https://youtu.be/your-talk"  // optionnel
  },
  {
    title: "EvalLLM 2025 — Workshop",
    role: "Demo",
    venue: "EvalLLM",
    year: "2025",
    topic: "Evaluation harness for IR/RAG with legal datasets",
    photo: "/conf-evalllm-2025.jpg",
    slides: "/slides/EvalLLM2025_Anas.pdf",
    video: ""
  }
];
