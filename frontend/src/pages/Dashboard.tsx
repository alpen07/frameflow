import Sidebar from '../components/Sidebar'

type ProjectStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Shooting'
  | 'Editing'
  | 'Delivered'
  | 'Cancelled'

interface Project {
  client: string
  project: string
  date: string
  status: ProjectStatus
}

const projects: Project[] = [
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

        <div className="mt-10 grid gap-6 xl:grid-cols-[2fr_1fr]">
          <section>
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
                  className="grid grid-cols-4 items-center border-b border-neutral-800 px-6 py-5 last:border-b-0"
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

                  <div>
                    <StatusBadge status={project.status} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside className="space-y-6">
            <NextShoot />

            <RecentClients />
          </aside>
        </div>
      </main>
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

function NextShoot() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <p className="text-sm text-neutral-500">
        Next Shoot
      </p>

      <h2 className="mt-2 text-xl font-semibold">
        Wedding Photography
      </h2>

      <p className="mt-1 text-neutral-400">
        Anna Müller
      </p>

      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">
            Date
          </span>

          <span>
            14 Oct
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Time
          </span>

          <span>
            14:00
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-neutral-500">
            Location
          </span>

          <span>
            Vienna
          </span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-orange-500 px-4 py-3 text-sm font-medium hover:bg-orange-400">
        View Project
      </button>
    </div>
  )
}

const recentClients = [
  {
    name: 'Anna Müller',
    project: 'Wedding Photography',
  },
  {
    name: 'Max Berger',
    project: 'Portrait Shooting',
  },
  {
    name: 'Lisa Weber',
    project: 'Event Video',
  },
]

function RecentClients() {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-500">
            Clients
          </p>

          <h2 className="mt-1 text-xl font-semibold">
            Recent Clients
          </h2>
        </div>
      </div>

      <div className="space-y-4">
        {recentClients.map((client) => (
          <div
            key={client.name}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 font-medium">
              {client.name.charAt(0)}
            </div>

            <div>
              <p className="text-sm font-medium">
                {client.name}
              </p>

              <p className="text-xs text-neutral-500">
                {client.project}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


interface StatusBadgeProps {
  status: ProjectStatus
}

function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<ProjectStatus, string> = {
    Pending: 'bg-yellow-500/10 text-yellow-400',
    Confirmed: 'bg-green-500/10 text-green-400',
    Shooting: 'bg-purple-500/10 text-purple-400',
    Editing: 'bg-blue-500/10 text-blue-400',
    Delivered: 'bg-emerald-500/10 text-emerald-400',
    Cancelled: 'bg-red-500/10 text-red-400',
  }

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}


export default Dashboard