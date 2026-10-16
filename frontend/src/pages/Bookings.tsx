import { useState } from 'react'
import Sidebar from '../components/Sidebar'

type BookingStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Cancelled'

type BookingFilter =
  | 'All'
  | 'Pending'
  | 'Confirmed'
  | 'Cancelled'

interface Booking {
  id: number
  client: string
  service: string
  date: string
  status: BookingStatus
}

const bookings: Booking[] = [
  {
    id: 1,
    client: 'Anna Müller',
    service: 'Wedding Photography',
    date: '14 Oct',
    status: 'Confirmed',
  },
  {
    id: 2,
    client: 'Max Berger',
    service: 'Portrait Shooting',
    date: '18 Oct',
    status: 'Pending',
  },
  {
    id: 3,
    client: 'Lisa Weber',
    service: 'Event Video',
    date: '21 Oct',
    status: 'Cancelled',
  },
  {
    id: 4,
    client: 'Sophie Wagner',
    service: 'Commercial Shoot',
    date: '25 Oct',
    status: 'Pending',
  },
]

function Bookings() {
  const [filter, setFilter] = useState<BookingFilter>('All')

  const filteredBookings =
    filter === 'All'
      ? bookings
      : bookings.filter((booking) => booking.status === filter)

  return (
    <div className="flex min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <p className="text-sm uppercase tracking-[0.25em] text-orange-500">
          Creator Workspace
        </p>

        <h1 className="mt-3 text-4xl font-bold">
          Bookings
        </h1>

        <p className="mt-3 text-neutral-400">
          Manage incoming and confirmed bookings.
        </p>

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">
                Overview
              </p>

              <h2 className="mt-1 text-2xl font-semibold">
                All Bookings
              </h2>
            </div>

            <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-medium transition hover:bg-orange-400">
              New Booking
            </button>
          </div>

          <div className="mb-6 flex flex-wrap gap-3">
            {(
              [
                'All',
                'Pending',
                'Confirmed',
                'Cancelled',
              ] as BookingFilter[]
            ).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-xl px-4 py-2 text-sm transition ${
                  filter === status
                    ? 'bg-orange-500 text-white'
                    : 'bg-neutral-900 text-neutral-400 hover:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <div className="grid grid-cols-4 border-b border-neutral-800 px-6 py-4 text-sm text-neutral-500">
              <p>Client</p>
              <p>Service</p>
              <p>Date</p>
              <p>Status</p>
            </div>

            {filteredBookings.map((booking) => (
              <div
                key={booking.id}
                className="grid grid-cols-4 items-center border-b border-neutral-800 px-6 py-5 last:border-b-0"
              >
                <p className="font-medium">
                  {booking.client}
                </p>

                <p className="text-neutral-300">
                  {booking.service}
                </p>

                <p className="text-neutral-400">
                  {booking.date}
                </p>

                <BookingStatusBadge
                  status={booking.status}
                />
              </div>
            ))}

            {filteredBookings.length === 0 && (
              <div className="px-6 py-10 text-center text-neutral-500">
                No bookings found.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

interface BookingStatusBadgeProps {
  status: BookingStatus
}

function BookingStatusBadge({
  status,
}: BookingStatusBadgeProps) {
  const statusStyles: Record<BookingStatus, string> = {
    Pending: 'bg-yellow-500/10 text-yellow-400',
    Confirmed: 'bg-green-500/10 text-green-400',
    Cancelled: 'bg-red-500/10 text-red-400',
  }

  return (
    <span
      className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  )
}

export default Bookings