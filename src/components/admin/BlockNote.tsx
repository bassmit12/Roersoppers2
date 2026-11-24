import Link from 'next/link'
import React from 'react'

const style: React.CSSProperties = {
  padding: '12px 16px',
  borderRadius: 4,
  background: 'var(--theme-elevation-50)',
  color: 'var(--theme-elevation-800)',
}

export const SwimGroupsNote = () => (
  <p style={style}>
    Dit blok toont alle groepen uit <Link href="/admin/collections/swim-groups">Zwemgroepen</Link>,
    in de ingestelde volgorde.
  </p>
)

export const TrainingScheduleNote = () => (
  <p style={style}>
    Dit blok toont alle trainingen uit{' '}
    <Link href="/admin/collections/training-sessions">Trainingen</Link>, gegroepeerd per dag.
  </p>
)
