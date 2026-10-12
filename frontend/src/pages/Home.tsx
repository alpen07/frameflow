import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="text-2xl font-bold">
          Frame<span className="text-orange-500">Flow</span>
        </div>

        <div className="hidden gap-8 text-sm text-neutral-300 md:flex">
          <a href="#services" className="hover:text-white">
            Services
          </a>

          <a href="#workflow" className="hover:text-white">
            How it works
          </a>

          <a href="#about" className="hover:text-white">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden text-sm text-neutral-300 hover:text-white sm:block">
            Login
          </button>

          <button className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-neutral-200">
            Book a Shoot
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-auto max-w-7xl px-6">

        <section className="flex min-h-[75vh] items-center">
          <div className="max-w-4xl">

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-orange-500">
              Photography & Videography
            </p>

            <h1 className="text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl">
              Your shoots.
              <br />
              Your clients.
              <br />
              <span className="text-neutral-500">
                Your workflow.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
              FrameFlow helps photographers and videographers manage
              bookings, clients and projects in one simple workspace.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-orange-500 px-7 py-3 font-medium text-white transition hover:bg-orange-400">
                Book a Shoot
              </button>

              <Link
                to="/dashboard"
                className="rounded-full border border-neutral-700 px-7 py-3 font-medium transition hover:border-neutral-500"
              >
                For Creators
              </Link>
            </div>

          </div>
        </section>

        {/* Services */}
        <section
          id="services"
          className="border-t border-neutral-800 py-24"
        >

          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Services
            </p>

            <h2 className="text-4xl font-semibold">
              Find the right shoot.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <ServiceCard
              number="01"
              title="Portrait"
              description="Professional portrait photography for individuals and personal brands."
            />

            <ServiceCard
              number="02"
              title="Events"
              description="Photography and video coverage for events, parties and special occasions."
            />

            <ServiceCard
              number="03"
              title="Commercial"
              description="Content for brands, businesses and advertising campaigns."
            />

            <ServiceCard
              number="04"
              title="Videography"
              description="Professional video production from concept to final delivery."
            />

          </div>
        </section>

        {/* Workflow */}
        <section
          id="workflow"
          className="border-t border-neutral-800 py-24"
        >

          <div className="mb-14">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              How it works
            </p>

            <h2 className="text-4xl font-semibold">
              From idea to final delivery.
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-4">

            <WorkflowStep
              number="01"
              title="Choose a service"
              text="Select the photography or video service that fits your project."
            />

            <WorkflowStep
              number="02"
              title="Pick a date"
              text="Choose from available dates directly through the platform."
            />

            <WorkflowStep
              number="03"
              title="Tell us your idea"
              text="Share your location, vision and important project details."
            />

            <WorkflowStep
              number="04"
              title="Get confirmed"
              text="Your creator confirms the booking and the project begins."
            />

          </div>
        </section>

      </main>

      <footer className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl justify-between px-6 py-10 text-sm text-neutral-500">

          <p>© 2026 FrameFlow</p>

          <p>
            Built for photographers & videographers.
          </p>

        </div>
      </footer>

    </div>
  )
}

interface ServiceCardProps {
  number: string
  title: string
  description: string
}

function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-neutral-800 bg-neutral-900 p-7 transition hover:-translate-y-1 hover:border-neutral-600">

      <p className="text-sm text-orange-500">
        {number}
      </p>

      <h3 className="mt-12 text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-neutral-400">
        {description}
      </p>

    </div>
  )
}

interface WorkflowStepProps {
  number: string
  title: string
  text: string
}

function WorkflowStep({
  number,
  title,
  text,
}: WorkflowStepProps) {
  return (
    <div>

      <p className="mb-5 text-sm text-orange-500">
        {number}
      </p>

      <h3 className="text-xl font-medium">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-neutral-400">
        {text}
      </p>
    </div>
  )

}


export default Home