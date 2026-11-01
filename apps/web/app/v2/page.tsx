import { CapabilitySheet } from "./_client/capability-sheet"
import { Header } from "./_client/header"
import { Hero } from "./_client/hero"
import { LogoPill } from "./_client/logo-pill"
import { Tools } from "./_client/tools"
import { Books } from "./_sections/books"
import { Capabilities } from "./_sections/capabilities"
import { Footer } from "./_sections/footer"
import { GuideIntro } from "./_sections/guide"
import { Industries } from "./_sections/industries"
import { Orchestration } from "./_sections/orchestration"
import { SocialProof } from "./_sections/social-proof"
import { SvgDefs } from "./_sections/svg-defs"

/** Section order matches the reference homepage, top to bottom. */
export default function V2Page() {
  return (
    <>
      <SvgDefs />
      <Header />
      <Hero />
      <div id="section-2-start" />
      <SocialProof />
      <LogoPill />
      <Orchestration />
      <Capabilities />
      <GuideIntro />
      <Books />
      <Tools />
      <Industries />
      <Footer />
      <CapabilitySheet />
    </>
  )
}
