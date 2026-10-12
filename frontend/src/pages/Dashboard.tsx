import Sidebar from '../components/Sidebar'

const projects = [
  {
    client: 'Anna Müller',
    project: 'Wedding Photography',
    date: '14 Oct',
    status: 'Confirmed',
  },
  {
    client: 'Max Berger',
    project: 'Portrait Shooting',
    date: '18 Oct',
    status: 'Pending',
  },
  {
    client: 'Lisa Weber',
    project: 'Event Video',
    date: '21 Oct',
    status: 'Editing',
  },
]

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-orange-500">
          Creator Workspace
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-3 text-neutral-400">
          Welcome back. Here is an overview of your projects.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <StatCard
            title="Upcoming Shoots"
            value="4"
            description="Next 14 days"
          />

          <StatCard
            title="In Editing"
            value="3"
            description="Projects in progress"
          />

          <StatCard
            title="Revenue"
            value="€2,450"
            description="This month"
          />
        </div>
      </main>
      <section className="mt-10">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500">
              Projects
            </p>

            <h2 className="mt-1 text-2xl font-semibold">
              Upcoming Projects
            </h2>
          </div>

          <button className="text-sm text-orange-500 hover:text-orange-400">
            View all
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
          <div className="grid grid-cols-4 border-b border-neutral-800 px-6 py-4 text-sm text-neutral-500">
            <p>Client</p>
            <p>Project</p>
            <p>Date</p>
            <p>Status</p>
          </div>

          {projects.map((project) => (
            <div
              key={`${project.client}-${project.date}`}
              className="grid grid-cols-4 border-b border-neutral-800 px-6 py-5 last:border-b-0"
            >
              <p className="font-medium">
                {project.client}
              </p>

              <p className="text-neutral-300">
                {project.project}
              </p>

              <p className="text-neutral-400">
                {project.date}
              </p>

              <p className="text-neutral-300">
                {project.status}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>

  )
}

interface StatCardProps {
  title: string
  value: string
  description: string
}

function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="text-sm text-neutral-400">
        {title}
      </p>

      <p className="mt-3 text-3xl font-semibold">
        {value}
      </p>

      <p className="mt-2 text-sm text-neutral-500">
        {description}
      </p>
    </div>
  )
}



export default Dashboard