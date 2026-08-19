import type { Metadata } from "next";
import { PageShell } from "../../ui";

export const metadata: Metadata = {
  title: "Railway Gate Status Privacy Policy",
  description: "Privacy policy for the Railway Gate Status app operated by BengCode organization.",
};

export default function RailwayGateStatusPrivacy() {
  return (
    <PageShell>
      <main className="policy-page section-pad">
        <header className="policy-header">
          <p className="eyebrow">Railway Gate Status</p>
          <h1>Privacy Policy</h1>
          <p className="policy-date">Effective 12 August 2026</p>
          <p className="policy-intro">
            Railway Gate Status (&ldquo;the app&rdquo;) is operated by BengCode organization (&ldquo;we&rdquo;, &ldquo;us&rdquo;).
            This policy explains what the app does with data. It is short because the app does very little.
          </p>
        </header>

        <article className="policy-content">
          <section>
            <h2>Summary</h2>
            <p><strong>The app does not collect personal data.</strong> There is no account, no sign-in and no way to enter personal information—the app has no text fields at all. It contains no analytics, no advertising and no crash-reporting software. It does not request access to your location, contacts, camera, files or phone identifiers.</p>
            <p>The only permission the app requests is internet access, which it needs to fetch train times.</p>
          </section>

          <section>
            <h2>What the app stores on your device</h2>
            <p>One file, in the app&apos;s private storage: a copy of the most recent train-status response it received. This is public railway information—train numbers, names and estimated times at stations near the crossing. It exists so the app can show you something when it cannot reach the internet, alongside the time it was fetched.</p>
            <p>It contains nothing about you, it is not readable by other apps, and it is deleted when you uninstall the app.</p>
            <p>The app also disables Android&apos;s automatic cloud backup, so this cached file is not copied to your Google account.</p>
          </section>

          <section>
            <h2>What the app sends when you use it</h2>
            <p>When you open the app or refresh it, it makes a request to our server for the current train status. When you open a train&apos;s detail screen, it requests that train&apos;s status by train number.</p>
            <p>These requests contain an application key identifying the app, and a train number. <strong>They contain nothing about you or your device.</strong></p>
            <h3>IP addresses</h3>
            <p>As with any internet request, our server necessarily sees the IP address your request came from. We use it for one purpose: rate limiting, so that a faulty or abusive client cannot overload the server.</p>
            <p>The address is held in the server&apos;s memory only, for at most ten minutes after your last request, and is then discarded. It is not written to disk, not used to build any profile, not linked to anything else, and never sold or shared.</p>
          </section>

          <section>
            <h2>Who else is involved</h2>
            <ul>
              <li><strong>Oracle Cloud Infrastructure</strong> hosts our server, and therefore processes requests in transit on our behalf.</li>
              <li><strong>railradar.in</strong> is the source of live train running data. Our server queries it; <strong>your device never contacts it</strong>, and no information about you is passed to it.</li>
              <li><strong>Where is My Train</strong>—if you tap &ldquo;Check WIMT&rdquo;, the app opens that app (or its website) at a page for the train number you were viewing. Once you leave, what happens is governed by their privacy policy, not this one. The app also copies a train number to your clipboard when you tap &ldquo;Copy&rdquo;, which stays on your device.</li>
            </ul>
            <p>We do not use any analytics or advertising provider, so there are none to list.</p>
          </section>

          <section>
            <h2>Traffic is encrypted</h2>
            <p>All communication between the app and our server uses HTTPS.</p>
          </section>

          <section>
            <h2>Children</h2>
            <p>The app is a general-purpose travel utility. It is not directed at children and we do not knowingly collect data from anyone, of any age.</p>
          </section>

          <section>
            <h2>Your rights</h2>
            <p>We hold no personal data about you, so there is nothing for us to show you, correct or delete on request. The data the app stores on your device is removed by uninstalling it, or by clearing the app&apos;s storage in Android settings.</p>
          </section>

          <section>
            <h2>Accuracy of the information shown</h2>
            <p>Train times shown in the app are estimates derived from third-party live-running data. They can be wrong, delayed or unavailable. Please read the safety note in the store listing: <strong>never use this app to decide whether it is safe to cross a railway line.</strong> Always obey signals, barriers and railway staff.</p>
          </section>

          <section>
            <h2>Changes to this policy</h2>
            <p>If this policy changes we will update this page and the effective date above. Material changes will be noted in the app&apos;s release notes on Google Play.</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>Questions about this policy: <a href="mailto:barrier-duly-usher@duck.com">barrier-duly-usher@duck.com</a></p>
          </section>
        </article>
      </main>
    </PageShell>
  );
}
