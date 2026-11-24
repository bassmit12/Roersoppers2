'use client'

import { motion, useInView } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { useRef } from 'react'

export type ScheduleDay = {
  label: string
  sessions: { id: number; time: string; groups: string }[]
}

export function TrainingSchedule({ title, days }: { title: string; days: ScheduleDay[] }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 px-6 sm:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
          <Calendar className="h-8 w-8" />
          {title}
        </h2>
      </div>

      {/* Desktop Calendar Grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-7 border-b border-slate-200">
          {days.map((day) => (
            <div
              key={day.label}
              className={`p-4 text-center font-bold text-slate-700 border-r border-slate-200 last:border-r-0 ${
                day.sessions.length > 0 ? 'bg-gradient-to-b from-cyan-50 to-blue-50' : 'bg-slate-50'
              }`}
            >
              <div className="text-sm sm:text-base">{day.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 min-h-[500px]">
          {days.map((day) => (
            <div key={day.label} className="border-r border-slate-200 last:border-r-0 p-3 bg-white">
              {day.sessions.length > 0 ? (
                <div className="space-y-2">
                  {day.sessions.map((session, index) => (
                    <motion.div
                      key={session.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.05 }}
                      className="group relative bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-3 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                        <span className="font-bold text-xs">{session.time}</span>
                      </div>
                      <div className="text-xs font-semibold leading-tight line-clamp-3">
                        {session.groups}
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-white/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  <div className="text-center">
                    <div className="text-4xl mb-2">–</div>
                    <div className="text-xs">Geen training</div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet List View */}
      <div className="lg:hidden divide-y divide-slate-200">
        {days.map((day, dayIndex) => {
          if (day.sessions.length === 0) return null

          return (
            <motion.div
              key={day.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: dayIndex * 0.1 }}
              className="p-4 sm:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-12 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                <h3 className="text-xl font-bold text-slate-800">{day.label}</h3>
              </div>

              <div className="space-y-3 ml-5">
                {day.sessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-white shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4" />
                      <span className="font-bold text-sm">{session.time}</span>
                    </div>
                    <div className="font-semibold text-sm leading-snug">{session.groups}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
