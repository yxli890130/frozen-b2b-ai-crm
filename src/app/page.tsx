const milestones = [
  "项目初始化",
  "Supabase 建库",
  "客户列表页",
  "新增与编辑客户",
  "客户详情与沟通记录",
  "火山引擎 AI 分析",
  "异常兜底",
  "角色权限设计",
  "Vercel 部署",
  "作品集包装",
];

const foundations = [
  "Next.js 16 + React 19 + TypeScript",
  "Supabase Postgres 保存客户与跟进数据",
  "火山引擎 API 输出客户分析与销售话术",
  "Vercel 部署形成可演示作品",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ed] text-[#1f2933]">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-8 lg:px-10">
        <nav className="flex items-center justify-between border-b border-[#d8c7a6] pb-5 text-sm">
          <span className="font-semibold tracking-[0.18em] text-[#7c5d2f]">
            FROZEN B2B AI CRM
          </span>
          <span className="rounded-full border border-[#9fb8c4] bg-white/70 px-4 py-2 text-[#41616f]">
            第 1 单元：项目初始化
          </span>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-semibold text-[#b05f2c]">
              冷冻产品 B 端销售场景
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#16212a] sm:text-5xl">
              冷冻产品B端客户线索管理 AI CRM
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52616b]">
              这是一个面向 AI 产品/解决方案岗位的企业级项目原型。系统会逐步完成客户线索管理、
              Supabase 数据持久化、火山引擎 AI 客户分析、销售话术输出和作品集文档沉淀。
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {foundations.map((item) => (
                <div
                  className="border-l-4 border-[#2d7a78] bg-white/75 px-4 py-3 shadow-sm"
                  key={item}
                >
                  <p className="text-sm font-medium text-[#26343d]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#d9c8a9] bg-white p-6 shadow-[12px_12px_0_#d9e3df]">
            <h2 className="text-xl font-bold text-[#16212a]">分阶段验收路线</h2>
            <p className="mt-2 text-sm leading-6 text-[#66727b]">
              每完成一个页面或功能，先确认可用，再进入下一步。
            </p>

            <ol className="mt-6 space-y-3">
              {milestones.map((milestone, index) => (
                <li className="flex items-center gap-3" key={milestone}>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                      index === 0
                        ? "bg-[#2d7a78] text-white"
                        : "bg-[#edf1ef] text-[#627178]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span
                    className={`text-sm ${
                      index === 0
                        ? "font-semibold text-[#1d3338]"
                        : "text-[#52616b]"
                    }`}
                  >
                    {milestone}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
