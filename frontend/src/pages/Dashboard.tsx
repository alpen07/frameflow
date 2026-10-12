import Sidebar from '../components/Sidebar'

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
      </main>
    </div>
  )
}

export default Dashboard