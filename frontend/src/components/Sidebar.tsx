import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Sidebar() {
    return (
        <aside className="min-h-screen w-64 border-r border-neutral-800 bg-neutral-950 p-6 text-white">
            <div className="mb-10 text-2xl font-bold">
                Frame<span className="text-orange-500">Flow</span>
            </div>

            <nav className="flex flex-col gap-3 text-sm">
                <NavLink
                    to="/dashboard"
                    end
                    className={({ isActive }) =>
                        `rounded-lg px-3 py-2 transition ${isActive
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/dashboard/bookings"
                    className={({ isActive }) =>
                        `rounded-lg px-3 py-2 transition ${isActive
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`
                    }
                >
                    Bookings
                </NavLink>

                <NavLink
                    to="/dashboard/clients"
                    className={({ isActive }) =>
                        `rounded-lg px-3 py-2 transition ${isActive
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`
                    }
                >
                    Clients
                </NavLink>

                <NavLink
                    to="/dashboard/projects"
                    className={({ isActive }) =>
                        `rounded-lg px-3 py-2 transition ${isActive
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`
                    }
                >
                    Projects
                </NavLink>

                <NavLink
                    to="/dashboard/services"
                    className={({ isActive }) =>
                        `rounded-lg px-3 py-2 transition ${isActive
                            ? 'bg-orange-500 text-white'
                            : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        }`
                    }
                >
                    Services
                </NavLink>
            </nav>

            <div className="mt-10 border-t border-neutral-800 pt-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-sm ${isActive ? 'text-white' : 'text-neutral-500 hover:text-white'}`
                    }
                >
                    ← Back to website
                </NavLink>
            </div>
        </aside>
    )
}

export default Sidebar