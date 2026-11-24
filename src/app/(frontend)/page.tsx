import { About } from '@/components/home/About'
import { Contact } from '@/components/home/Contact'
import { Events } from '@/components/home/Events'
import { Hero } from '@/components/home/Hero'
import { Pool } from '@/components/home/Pool'
import { SwimGroups } from '@/components/home/SwimGroups'
import { getGlobal } from '@/lib/payload'

export default async function HomePage() {
  const [home, settings] = await Promise.all([getGlobal('home'), getGlobal('site-settings')])

  return (
    <main>
      <Hero hero={home.hero} siteName={settings.siteName} />
      <About about={home.about} />
      <SwimGroups groups={home.groups} />
      <Pool pool={home.pool} />
      <Events events={home.events} />
      <Contact contact={home.contact} />
    </main>
  )
}
