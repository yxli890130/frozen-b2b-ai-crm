# Frozen B2B AI CRM

冷冻产品 B 端客户线索管理 AI CRM。这个项目用于把真实的冷冻产品 B 端销售场景，拆成一个可演示、可复盘、可面试讲解的企业级 AI 产品原型。

## 项目目标

- 帮助销售录入、查找、分析、跟进 B 端客户线索。
- 使用 Supabase 保存客户、沟通记录和 AI 分析结果。
- 使用火山引擎 API 输出客户画像、线索评分、跟进建议和销售话术。
- 部署到 Vercel，形成可以现场演示的线上作品。
- 同步沉淀 PRD、流程图、角色权限、数据源、工具调用、异常兜底和评估指标。

## 当前阶段

阶段 1：项目初始化。

已完成：

- 独立 Next.js 项目骨架。
- README 项目定位。
- 企业级项目表达文档骨架。
- 环境变量示例。

下一阶段：

- Supabase 建库与数据表设计。

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase Postgres
- Vercel
- 火山引擎 OpenAI-compatible API

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：

```text
http://localhost:3000
```

## 环境变量

复制 `.env.example` 为 `.env.local`，然后填入真实配置。

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

## 项目文档

- [PRD](docs/prd.md)
- [业务流程](docs/flow.md)
- [角色权限](docs/permissions.md)
- [评估指标](docs/evaluation.md)
- [面试讲稿](docs/interview-story.md)

## 分阶段验收

本项目按页面和功能逐步完成。每完成一个单元，先验收，再进入下一单元。

1. 项目初始化
2. Supabase 建库
3. 客户列表页
4. 新增与编辑客户
5. 客户详情与沟通记录
6. 火山引擎 AI 分析
7. 异常兜底
8. 角色权限设计
9. Vercel 部署
10. 作品集包装
