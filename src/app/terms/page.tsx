import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The legal terms governing your use of JourneeX — including user content ownership, AI disclaimer, acceptable use, and governing law.",
};

const LAST_UPDATED = "November 4, 2026";
const CONTACT_EMAIL = "journeex@neerajraisinghani.com";
const CONTACT_ADDRESS = "2nd Floor, House No. 18, Roots Courtyard, Sector 48, Gurugram, Haryana, India 122018";

export default function TermsPage() {
  return (
    <main style={{ paddingTop: "64px" }}>

      {/* Hero */}
      <section
        className="section-pad"
        style={{
          background: "var(--bg-dark)",
          color: "var(--text-light)",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: -8,
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: "clamp(4rem, 14vw, 16rem)",
            fontWeight: 900,
            color: "rgba(255,255,255,0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Terms
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h1
            className="display"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
              margin: "0 0 28px",
              color: "#fff",
            }}
          >
            Terms of<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              Service.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
              color: "var(--text-light-muted)",
              maxWidth: "520px",
              margin: 0,
            }}
          >
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div>

            <Section title="1. Acceptance of Terms and Binding Agreement">
              <p>These Terms of Service (&quot;Terms,&quot; &quot;Agreement,&quot; or &quot;ToS&quot;) constitute a legally binding agreement between you, the individual or legal entity accessing or using the Service (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;), and Neeraj Raisinghani, an individual residing at {CONTACT_ADDRESS} (hereinafter referred to as the &quot;Operator,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing, registering for, logging into, or otherwise using the JourneeX platform in any capacity whatsoever, you unequivocally acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety, including any documents expressly incorporated herein by reference, including but not limited to the Privacy Policy available at <a href="/privacy">journeex.neerajraisinghani.com/privacy</a>. If you do not agree to these Terms in their entirety, you are expressly prohibited from accessing or using the Service and must immediately cease all use thereof. These Terms apply to all services offered under the JourneeX brand, including the website accessible at <a href="https://journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">journeex.neerajraisinghani.com</a> and the web-based application accessible at <a href="https://app.journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">app.journeex.neerajraisinghani.com</a> (collectively, the &quot;Service&quot; or &quot;Platform&quot;). The following additional terms are applicable to your acceptance of this Agreement:</p>
              <ul>
                <li>These Terms supersede all prior and contemporaneous agreements, representations, and understandings, whether oral or written, between you and the Operator relating to the subject matter hereof.</li>
                <li>These Terms are to be read in conjunction with the Operator&apos;s Privacy Policy, which is incorporated herein by reference and forms an integral part of this Agreement.</li>
                <li>The Operator reserves the right to modify these Terms at any time in accordance with Section 13 of this Agreement. Your continued use of the Service after the effective date of any modification constitutes your binding acceptance of the modified Terms.</li>
                <li>If you are accessing or using the Service on behalf of a legal entity, you represent and warrant that you have full authority to bind that entity to these Terms, and that by accepting these Terms you do so on behalf of that entity.</li>
                <li>The Operator&apos;s failure to enforce any provision of these Terms shall not be construed as a waiver of the Operator&apos;s right to enforce such provision in the future.</li>
              </ul>
            </Section>

            <Section title="2. Eligibility and Capacity to Contract">
              <p>Access to and use of the Service is strictly conditional upon the User satisfying all of the following eligibility requirements. By registering for or using the Service in any manner, you represent, warrant, and covenant that all of the following conditions are and shall remain satisfied throughout the duration of your use of the Service:</p>
              <ul>
                <li>You are at least thirteen (13) years of age. The Service is not directed to, and may not be used by, any person under the age of thirteen (13) years.</li>
                <li>If you are between the ages of thirteen (13) and eighteen (18) years, you have obtained the prior informed consent of a parent or legal guardian who has reviewed and agrees to these Terms on your behalf, and your parent or legal guardian accepts full responsibility for your use of the Service.</li>
                <li>You have the full legal capacity, power, and authority to enter into, execute, and perform your obligations under this Agreement under the laws of your jurisdiction of residence.</li>
                <li>Your entry into and performance of this Agreement does not violate any applicable law, regulation, court order, or contractual obligation by which you are bound.</li>
                <li>You are not a person or entity that is subject to any sanctions, trade restrictions, or export control measures imposed by the Government of India, the United States of America, the European Union, or any other competent authority that would prohibit or restrict your use of the Service.</li>
                <li>You are not a person who has been previously suspended or permanently banned from using the Service by the Operator.</li>
              </ul>
              <p>The Operator expressly prohibits the use of the Service by any individual under the age of thirteen (13) years. In the event that the Operator becomes aware that a registered account is held by an individual below the minimum age threshold, the Operator shall, without undue delay, permanently delete such account and all associated data in accordance with its Privacy Policy. The Operator reserves the right to request documentary evidence of age or identity from any user at any time and to suspend or terminate any account pending satisfactory verification of eligibility.</p>
            </Section>

            <Section title="3. User Account Registration and Security">
              <p>In order to access the core features of the Service, you are required to register for an account by providing a valid and accurate electronic mail address. By registering for an account, you represent, warrant, and undertake compliance with all of the following obligations with respect to your account:</p>
              <ul>
                <li>All information provided during the account registration process is, and shall at all times remain, true, accurate, current, and complete. You undertake to maintain and promptly update your registration information to ensure its ongoing accuracy.</li>
                <li>You are solely and exclusively responsible for maintaining the strict confidentiality of your account login credentials, including your electronic mail address and password. You shall not disclose your credentials to any third party under any circumstances.</li>
                <li>You are solely and exclusively responsible for all activities, transactions, communications, and conduct that occur under your account, whether or not such activities were authorised by you.</li>
                <li>You shall immediately notify the Operator of any actual or reasonably suspected unauthorised access to, or use of, your account or login credentials, by contacting <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
                <li>You shall not register more than one account without the express prior written authorisation of the Operator.</li>
                <li>You shall not transfer, sell, assign, or otherwise permit any third party to access or use your account.</li>
                <li>You shall not create an account on behalf of any other person or impersonate any person or entity in connection with the Service.</li>
                <li>You shall use a strong and unique password for your JourneeX account and shall update your password promptly if you have reason to believe it has been compromised.</li>
              </ul>
              <p>The Operator shall not be liable for any loss, damage, cost, or liability of any kind arising from your failure to maintain the confidentiality of your account credentials or from any unauthorised use of your account. The Operator reserves the right to refuse registration, suspend, or terminate any account at its sole discretion, with or without cause and with or without prior notice.</p>
            </Section>

            <Section title="4. Ownership of User Content and Licence Grant">
              <p>As between you and the Operator, you retain full and exclusive ownership of all journal entries, text, and other original content that you create, author, upload, or submit through the Service (&quot;User Content&quot;). The Operator makes no claim of ownership over your User Content, and nothing in these Terms shall be construed as transferring any intellectual property rights in your User Content to the Operator. By submitting User Content through the Service, you hereby grant the Operator the following limited licence and make the following representations and warranties:</p>
              <ul>
                <li><strong>Licence Grant:</strong> You grant the Operator a limited, non-exclusive, non-transferable, non-sublicensable, royalty-free licence to access, store, process, transmit, and use your User Content solely and exclusively to the extent necessary to provide the Service to you, including for the purpose of generating artificial intelligence reflections and weekly summaries in direct response to your journal entries.</li>
                <li><strong>Duration of Licence:</strong> The licence described above is granted for the duration of your active use of the Service and shall automatically and irrevocably terminate upon the permanent deletion of your account and associated data in accordance with the Privacy Policy retention timelines.</li>
                <li><strong>No Prohibited Uses:</strong> The Operator expressly and unconditionally warrants that it shall not use your User Content for any of the following purposes: advertising; behavioural profiling; secondary commercial exploitation; sale or transfer to any third party; training, fine-tuning, evaluation, or improvement of any artificial intelligence or machine learning model, whether operated by the Operator or any third party; or any purpose not expressly described in the Privacy Policy.</li>
                <li><strong>Your Representations Regarding User Content:</strong> You represent and warrant that: (a) you have all necessary rights, licences, and permissions to submit the User Content to the Service and to grant the licence described above; (b) your User Content does not infringe, misappropriate, or violate any intellectual property rights, privacy rights, publicity rights, or other rights of any third party; (c) your User Content does not contain material that is defamatory, obscene, threatening, harassing, unlawful, or otherwise objectionable under applicable law; and (d) the submission of your User Content through the Service does not violate any applicable law, regulation, or contractual obligation binding upon you.</li>
                <li><strong>Sole Responsibility:</strong> You are solely and exclusively responsible for the content, accuracy, and legality of all User Content that you submit through the Service. The Operator assumes no liability whatsoever for the content of any User Content submitted by users.</li>
              </ul>
            </Section>

            <Section title="5. Acceptable Use Policy and Prohibited Conduct">
              <p>Your use of the Service is at all times subject to the following acceptable use obligations and restrictions. The Operator has established these restrictions in order to protect the integrity, security, and availability of the Service, to protect the rights and interests of all users and third parties, and to ensure compliance with applicable law. By accessing or using the Service in any manner, you expressly agree, represent, and warrant that you shall not, directly or indirectly, whether through your own actions or by facilitating or enabling the actions of any third party, engage in any of the following prohibited conduct:</p>
              <ul>
                <li>Create, upload, store, transmit, distribute, publish, or otherwise make available through the Service any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, libellous, vulgar, obscene, invasive of another person&apos;s privacy or publicity rights, hateful on the basis of race, ethnicity, religion, gender, sexual orientation, disability, or any other protected characteristic, or otherwise objectionable or prohibited under applicable law.</li>
                <li>Infringe, misappropriate, dilute, or otherwise violate any intellectual property rights, including but not limited to copyrights, trademarks, trade secrets, patents, moral rights, or database rights, of any person or entity.</li>
                <li>Violate the privacy rights, publicity rights, or any other personal rights of any third party, including by collecting, disclosing, or using any Personal Data of any other person without their consent.</li>
                <li>Attempt to gain, or gain, unauthorised access to any part of the Service, its underlying servers, databases, networks, infrastructure, source code, algorithms, or administrative systems, or to the accounts, data, or Personal Data of any other user of the Service.</li>
                <li>Engage in any form of reverse engineering, disassembly, decompilation, deconstruction, translation, adaptation, or other attempt to derive, reconstruct, or reproduce the source code, underlying algorithms, data models, trade secrets, or other proprietary information of the Service.</li>
                <li>Deploy, use, or enable any automated tools, bots, crawlers, spiders, scrapers, scripts, macros, or other automated means to access, extract data from, monitor, interact with, or perform any action on the Service without the express prior written consent of the Operator.</li>
                <li>Share, sell, transfer, lease, sublicense, or otherwise provide access to your account or login credentials to any third party.</li>
                <li>Introduce, upload, transmit, or otherwise make available any malicious code, software, virus, trojan horse, worm, ransomware, spyware, adware, or any other harmful, disruptive, or destructive code, file, program, or content into the Service or its underlying infrastructure.</li>
                <li>Interfere with, disrupt, impair, overload, or damage the integrity, performance, security, or availability of the Service, its servers, networks, or systems, or the systems or networks of any third party, including through denial-of-service attacks, distributed denial-of-service attacks, or any other form of attack.</li>
                <li>Use the Service to send or facilitate the sending of unsolicited commercial communications, spam, phishing messages, or any other form of unauthorised mass communication to any person.</li>
                <li>Use the Service in any manner that imposes a disproportionately large or unreasonable load on the Operator&apos;s infrastructure, servers, or bandwidth.</li>
                <li>Use the Service to engage in any activity that constitutes market manipulation, fraud, money laundering, financing of terrorism, or any other financial crime under applicable law.</li>
                <li>Impersonate any person or entity, or falsely represent your affiliation with any person or entity, in connection with your use of the Service.</li>
                <li>Remove, obscure, alter, or circumvent any copyright notice, trademark notice, or other proprietary rights notice displayed on or in connection with the Service.</li>
                <li>Use the Service in violation of any applicable local, national, or international law, regulation, treaty, directive, or code of practice.</li>
                <li>Assist, facilitate, encourage, or enable any third party to engage in any of the conduct prohibited under this Section.</li>
              </ul>
              <p>The Operator reserves the right, in its sole and absolute discretion and without any obligation to provide prior notice or reasons, to investigate any suspected violation of this Section, to remove or disable access to any content that violates this Section, and to suspend or permanently terminate the account and access rights of any user found to be in breach of these provisions. Such action may be taken without liability to the user whose account is suspended or terminated. Any suspected illegal conduct may be reported to appropriate law enforcement authorities at the Operator&apos;s discretion.</p>
            </Section>

            <Section title="6. Nature of AI-Generated Content and Disclaimer of Professional Advice">
              <p>The Service incorporates third-party artificial intelligence technology to generate personalised textual reflections and periodic summaries in direct response to the journal entries submitted by users through the Platform. Users must understand the nature and limitations of AI-generated content before relying on it in any manner. The following disclosures and disclaimers apply in full to all AI-generated content produced through the Service:</p>
              <ul>
                <li><strong>Automated Generation:</strong> All AI-generated content produced by the Service, including but not limited to daily reflections and weekly summaries, is generated entirely automatically by large language model computational processes without any human review, supervision, editorial oversight, or professional input. Such content does not reflect the personal opinions, professional judgement, recommendations, clinical assessment, or professional expertise of any human being.</li>
                <li><strong>Not Professional Advice:</strong> The AI-generated reflections and summaries provided through the Service are intended solely for personal journaling, self-reflection, creative expression, and mindfulness purposes. Under no circumstances do they constitute, and they shall not be construed as constituting, professional advice of any kind whatsoever, including but not limited to: mental health counselling; psychological or psychiatric therapy or treatment; medical diagnosis, prognosis, or treatment recommendations; legal advice or legal opinion; financial advice, investment guidance, or tax advice; or nutritional, dietary, or wellness advice.</li>
                <li><strong>Inherent Limitations:</strong> AI-generated content may contain inaccuracies, factual errors, hallucinations, omissions, irrelevant content, or content that is factually incorrect, contextually inappropriate, or unsuited to your individual circumstances. Large language models are probabilistic systems that do not possess human judgment, empathy, professional qualifications, or factual certainty.</li>
                <li><strong>No Reliance:</strong> The Operator expressly disclaims any and all responsibility, liability, and obligation arising from or related to decisions made, actions taken, or actions not taken by users in reliance on AI-generated content produced by the Service. You assume full and sole responsibility for any decision you make or action you take on the basis of, or influenced by, any AI-generated content delivered through the Service.</li>
                <li><strong>Seek Professional Help:</strong> Users experiencing mental health difficulties, suicidal ideation, psychological distress, medical symptoms or illness, legal issues, financial difficulties, or any other situation requiring professional expertise are strongly and unequivocally advised to consult with a qualified, licensed, and registered professional in the relevant field. JourneeX is not a substitute for professional care of any kind.</li>
                <li><strong>Emergency Situations:</strong> If you are in immediate danger or require emergency assistance, please contact your local emergency services immediately. JourneeX is not an emergency service and cannot provide crisis intervention.</li>
              </ul>
            </Section>

            <Section title="7. Analytics, Cookies, and Tracking Technologies">
              <p>The Operator uses certain analytics and tracking technologies in connection with the Service for the purposes of understanding how the Service is used, diagnosing technical issues, and informing product development decisions. By accessing or using the Service, you acknowledge the Operator&apos;s use of such technologies as described in this Section and in greater detail in the Privacy Policy. The following analytics and tracking tools are deployed in connection with the Service:</p>
              <ul>
                <li><strong>Google Tag Manager and Google Analytics 4 (Website and Application):</strong> The Operator uses Google Tag Manager as a tag management system to deploy Google Analytics 4 on both the website at journeex.neerajraisinghani.com and the web application at app.journeex.neerajraisinghani.com. Google Analytics 4 collects anonymised, aggregated data about how visitors and users interact with the Service, including pages visited, session duration, referral sources, device characteristics, and approximate geographic location. Where required by applicable data protection law, including the GDPR for users in the EU and EEA and the UK GDPR for users in the United Kingdom, Google Analytics 4 is activated only upon receipt of the user&apos;s prior, freely given, specific, informed, and unambiguous consent through the cookie consent notice displayed on the website. Users who decline analytics cookies shall not have Google Analytics 4 activated during their session. Users who have previously consented may withdraw their consent at any time by clearing the site&apos;s cookies and local storage from their browser settings. The Operator&apos;s use of Google Analytics 4 is subject to Google LLC&apos;s Privacy Policy and Terms of Service, and the Operator has configured Google Analytics 4 with IP anonymisation enabled to prevent the storage of users&apos; full IP addresses.</li>
                <li><strong>Product Analytics (Web Application):</strong> The Operator uses a third-party product analytics platform within the JourneeX web application accessible at app.journeex.neerajraisinghani.com to collect anonymised data about how registered users interact with the application interface and its features. This service is used exclusively for internal product analytics, feature usage analysis, and the identification of usability issues. The Operator has configured this provider to avoid collection of the content of journal entries or other sensitive User Content.</li>
                <li><strong>reCAPTCHA Enterprise (Contact Form):</strong> The Operator integrates Google reCAPTCHA Enterprise into the contact form on the website for the purpose of detecting and preventing automated bot submissions and fraudulent activity. This service is operated by Google LLC and collects certain user interaction signals as described in the Privacy Policy. Its use is strictly limited to fraud prevention in connection with the contact form facility.</li>
                <li><strong>No Advertising Technologies:</strong> The Operator does not deploy any advertising cookies, retargeting pixels, demand-side platform integrations, affiliate tracking scripts, or any other technology whose primary purpose is to serve targeted or behavioural advertising in connection with the Service. The Operator does not engage in programmatic advertising or cross-site behavioural tracking of any kind.</li>
              </ul>
              <p>For full details of the specific cookies deployed, their purposes, retention periods, and your rights in relation to them, please refer to Section 8 of the Privacy Policy at <a href="/privacy">journeex.neerajraisinghani.com/privacy</a>.</p>
            </Section>

            <Section title="8. Service Availability, Modifications, and Discontinuation">
              <p>The Operator shall use commercially reasonable endeavours to maintain the availability and functionality of the Service; however, the Operator makes no representation, warranty, or guarantee that the Service will be available on an uninterrupted, continuous, error-free, or secure basis. Users acknowledge and accept that the Service may be subject to periods of unavailability or degraded performance for a variety of reasons, including but not limited to:</p>
              <ul>
                <li>Planned maintenance windows for system updates, security patches, database maintenance, or infrastructure upgrades.</li>
                <li>Unplanned outages arising from hardware failures, software defects, network disruptions, power failures, or other technical issues beyond the Operator&apos;s reasonable control.</li>
                <li>Service disruptions attributable to the failure, unavailability, or degraded performance of third-party infrastructure providers including but not limited to database, authentication, and AI API providers.</li>
                <li>Periods of high demand that exceed the available capacity of the Service infrastructure.</li>
                <li>Events of force majeure as described in Section 14 of these Terms.</li>
              </ul>
              <p>The Operator reserves the right, in its sole and absolute discretion and at any time and without prior notice, to exercise any of the following rights with respect to the Service:</p>
              <ul>
                <li>Modify, update, enhance, reduce, replace, or alter any feature, function, interface, algorithm, or component of the Service.</li>
                <li>Temporarily suspend access to all or any part of the Service for maintenance, security, compliance, or other operational purposes.</li>
                <li>Permanently discontinue the Service or any feature or component thereof.</li>
                <li>Impose usage limits, rate limits, or access restrictions on any user or class of users.</li>
              </ul>
              <p>In the event of a planned significant modification or permanent discontinuation of the Service, the Operator shall use reasonable endeavours to provide registered users with advance notice by electronic mail. The Operator shall not be liable to you or any third party for any loss, damage, or cost arising from any modification, suspension, discontinuation, or unavailability of the Service.</p>
            </Section>

            <Section title="9. Pricing, Subscriptions, and Payment Terms">
              <p>The Service is currently provided to users on a no-charge basis. The Operator reserves the right to introduce paid subscription plans, premium features, or other fee-based services or functionality at any time in the future. The following terms shall apply with respect to any future pricing or payment arrangements:</p>
              <ul>
                <li><strong>Prior Disclosure:</strong> Prior to the introduction of any charge, fee, or subscription requirement applicable to any feature or component of the Service that is currently provided without charge, the Operator shall provide registered users with advance notice by electronic mail, clearly specifying the nature of the charge, the amount, the billing interval, and the date from which the charge shall apply.</li>
                <li><strong>Separate Pricing Terms:</strong> Any paid subscription plan or fee-based feature introduced by the Operator shall be subject to separate pricing terms and conditions that shall be presented to you at the time of purchase. Your subscription to or purchase of any paid plan or feature shall constitute your acceptance of those additional pricing terms.</li>
                <li><strong>Auto-Renewal:</strong> Where paid subscriptions are offered, such subscriptions may auto-renew at the end of each billing interval (whether monthly, annual, or otherwise) at the then-current price, unless cancelled by the user in accordance with the cancellation procedure specified at the time of subscription and before the renewal date.</li>
                <li><strong>Cancellation:</strong> Clear and accessible instructions for cancelling a subscription shall be provided to subscribers at the time of purchase and shall be available within the user&apos;s account settings.</li>
                <li><strong>Refunds:</strong> Any refund policy applicable to paid plans or features shall be clearly specified at the time of purchase. In the absence of a stated refund policy, all fees paid are non-refundable except as required by applicable consumer protection law.</li>
                <li><strong>Price Changes:</strong> The Operator shall provide adequate advance notice to subscribers of any changes to subscription pricing or billing terms before such changes take effect. Continued use of a paid plan after such notice constitutes acceptance of the revised pricing.</li>
              </ul>
            </Section>

            <Section title="10. Termination and Suspension">
              <p>Either party may terminate this Agreement and the user&apos;s access to the Service in the circumstances described below. All terminations and suspensions are subject to the provisions set out in this Section:</p>
              <ul>
                <li><strong>Termination by User:</strong> You may terminate your account and your use of the Service at any time by using the account deletion functionality available within the application interface, or by submitting a written deletion request to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Upon receipt and processing of a deletion request, your Personal Data shall be handled in accordance with the retention periods and deletion procedures set out in the Privacy Policy.</li>
                <li><strong>Suspension by Operator:</strong> The Operator reserves the right, in its sole and absolute discretion and without prior notice, to temporarily suspend your access to all or any part of the Service in circumstances where the Operator reasonably believes that suspension is necessary or appropriate, including but not limited to: suspected violation of these Terms; suspected fraudulent, abusive, or unlawful activity; security risks; or operational necessity.</li>
                <li><strong>Termination by Operator for Cause:</strong> The Operator reserves the right to permanently terminate your account and access to the Service immediately and without prior notice in any of the following circumstances: (a) you have breached any provision of these Terms; (b) the Operator is required to terminate your account by applicable law, court order, or direction of a regulatory authority; (c) the Operator reasonably suspects fraudulent, abusive, or unlawful activity in connection with your account; (d) continued provision of the Service to you would, in the Operator&apos;s reasonable opinion, expose the Operator, its infrastructure providers, or any third party to legal liability, regulatory action, or reputational harm; or (e) any representation or warranty made by you in these Terms is found to be false or materially misleading.</li>
                <li><strong>Effect of Termination:</strong> Upon termination of your account for any reason: (a) all rights and licences granted to you under these Terms shall immediately cease; (b) you must immediately cease all use of the Service; (c) the Operator shall handle your Personal Data in accordance with the Privacy Policy; and (d) all provisions of these Terms that by their nature should survive termination shall survive, including but not limited to Sections 10, 11, 12, 13, and 14.</li>
                <li><strong>Accrued Rights:</strong> Termination of your account shall not affect any rights or liabilities that have accrued prior to the date of termination, nor shall it affect the continued operation of any provision of these Terms that is expressly or by implication intended to operate after termination.</li>
              </ul>
            </Section>

            <Section title="11. Disclaimer of Warranties">
              <p>To the fullest extent permissible under applicable law, the Service is provided to you on an &quot;as is,&quot; &quot;as available,&quot; and &quot;with all faults&quot; basis, without any representations, warranties, guarantees, or conditions of any kind whatsoever, whether express, implied, statutory, collateral, or otherwise. The Operator, to the maximum extent permitted by law, expressly disclaims all representations, warranties, and conditions with respect to the Service, including but not limited to the following:</p>
              <ul>
                <li><strong>No Implied Warranties:</strong> The Operator expressly disclaims all implied warranties and conditions, including but not limited to implied warranties of merchantability, fitness for a particular purpose, satisfactory quality, accuracy, title, quiet enjoyment, and non-infringement of third-party rights.</li>
                <li><strong>No Warranty of Availability:</strong> The Operator makes no warranty or representation that the Service will be available on a continuous, uninterrupted, timely, secure, or error-free basis, or that any defects, errors, or bugs in the Service will be identified, corrected, or remedied within any particular timeframe or at all.</li>
                <li><strong>No Warranty of Accuracy:</strong> The Operator makes no warranty or representation that any information, content, data, AI-generated reflections, AI-generated summaries, or other results obtained through the use of the Service will be accurate, complete, reliable, current, up-to-date, suitable, or fit for any particular purpose.</li>
                <li><strong>No Warranty Against Harmful Components:</strong> The Operator makes no warranty or representation that the Service, the servers on which the Service operates, or any electronic communications transmitted from or through the Service, are free of viruses, malware, trojans, worms, or other harmful or destructive code or components.</li>
                <li><strong>No Warranty of Security:</strong> The Operator makes no warranty or representation that the Service is fully secure or immune from unauthorised access, hacking, data breaches, or other security incidents, notwithstanding the security measures described in the Privacy Policy.</li>
                <li><strong>No Warranty Created by Representations:</strong> No oral or written advice, representation, or information provided by the Operator or any of its representatives, whether through the Service, by electronic mail, or by any other means, shall create any warranty not expressly and explicitly stated in these Terms.</li>
              </ul>
              <p>Nothing in these Terms shall be construed to exclude or limit any warranty or condition that cannot be excluded or limited under applicable law, including any implied warranty or condition that is mandatorily implied by consumer protection legislation applicable in your jurisdiction.</p>
            </Section>

            <Section title="12. Limitation of Liability">
              <p>To the maximum extent permitted by applicable law, the Operator&apos;s liability to you in connection with the Service, these Terms, or any matter arising out of or related to either, is strictly limited as set out in this Section. You expressly acknowledge and agree to the following limitations, which form a material part of the basis of the bargain between you and the Operator:</p>
              <ul>
                <li><strong>Exclusion of Consequential Damages:</strong> In no event shall the Operator, Neeraj Raisinghani, be liable to you or any third party for any indirect, incidental, special, exemplary, punitive, aggravated, or consequential damages of any kind whatsoever, including but not limited to: loss of profits; loss of revenue; loss of business opportunities; loss of data or corruption of data; loss of goodwill or reputation; service interruption; computer damage or system failure; the cost of procuring substitute services or goods; loss of anticipated savings; or emotional distress, mental anguish, or psychological harm, in each case whether arising in contract, tort (including negligence, gross negligence, and strict liability), breach of statutory duty, or any other theory of liability, and even if the Operator has been advised of or should have been aware of the possibility of such damages.</li>
                <li><strong>Cap on Direct Liability:</strong> Without prejudice to the exclusion of consequential damages set out above, the Operator&apos;s total aggregate liability to you for all direct losses, damages, claims, proceedings, costs, and expenses arising out of or related to these Terms or the Service, regardless of the form of action or the legal theory on which the claim is based, shall not exceed the greater of: (a) the total amount actually paid by you to the Operator in the twelve (12) calendar months immediately preceding the date on which the event giving rise to the claim first occurred; or (b) Indian Rupees One Hundred (INR 100).</li>
                <li><strong>Multiplicity of Claims:</strong> The aggregate liability cap set out above applies to the totality of all claims by you against the Operator, whether brought concurrently or sequentially, and regardless of whether such claims are based on the same or different factual circumstances. The existence of multiple claims shall not expand the aggregate liability cap.</li>
                <li><strong>Survival:</strong> The limitations of liability set forth in this Section shall apply to the fullest extent permitted by applicable law and shall survive the termination or expiry of these Terms and the deletion of your account.</li>
                <li><strong>Non-Excludable Liabilities:</strong> Nothing in these Terms shall operate to exclude, restrict, or limit any liability that cannot lawfully be excluded, restricted, or limited under applicable law, including but not limited to liability for death or personal injury caused by negligence, liability for fraudulent misrepresentation, or any liability that is mandatorily imposed by applicable consumer protection legislation in your jurisdiction.</li>
              </ul>
            </Section>

            <Section title="13. Indemnification">
              <p>To the fullest extent permitted by applicable law, you agree to defend, indemnify, and hold harmless the Operator, Neeraj Raisinghani, and each of his affiliates, officers, directors, employees, agents, contractors, licensors, service providers, successors, and assigns (collectively, the &quot;Indemnified Parties&quot;) from and against any and all claims, demands, actions, proceedings, losses, liabilities, damages, judgments, awards, penalties, fines, costs, and expenses (including without limitation reasonable legal fees and disbursements on a solicitor-and-own-client basis) arising out of or relating to any of the following:</p>
              <ul>
                <li><strong>Your Breach of Terms:</strong> Any actual or alleged breach by you of any representation, warranty, covenant, obligation, or other provision set out in these Terms, including but not limited to any breach of your obligations regarding account security, acceptable use, and the User Content licence;</li>
                <li><strong>Your Content:</strong> Any User Content you submit, post, transmit, store, share, or otherwise make available through the Service, including without limitation any claim that your User Content infringes, misappropriates, or violates the intellectual property rights, privacy rights, publicity rights, moral rights, or other proprietary rights of any third party, or that your User Content is defamatory, obscene, offensive, illegal, or otherwise harmful;</li>
                <li><strong>Your Use of the Service:</strong> Your access to or use of the Service in a manner that is inconsistent with these Terms, in violation of any applicable law or regulation, or that is otherwise wrongful, negligent, fraudulent, or intentional;</li>
                <li><strong>Third-Party Claims Arising from Your Actions:</strong> Any claim brought by a third party arising from or related to your conduct on or through the Service, including but not limited to claims arising from your interactions or communications with other users, third parties, or any person who accesses the Service through your account;</li>
                <li><strong>Violation of Law:</strong> Any violation by you of any applicable local, national, or international law, rule, regulation, or order, including but not limited to privacy laws, data protection regulations, export control laws, anti-spam legislation, or laws governing electronic communications;</li>
                <li><strong>Procedure:</strong> The Operator reserves the right, at your expense and at the Operator&apos;s sole option, to assume exclusive control of the defence and settlement of any matter otherwise subject to indemnification by you, in which case you agree to cooperate fully with the Operator in asserting any available defences and to reimburse all reasonable costs incurred. You shall not settle any claim, action, or proceeding that is subject to this indemnification obligation without the Operator&apos;s prior written consent, which shall not be unreasonably withheld.</li>
              </ul>
            </Section>

            <Section title="14. Governing Law, Jurisdiction, and Dispute Resolution">
              <p>These Terms, and any dispute, controversy, or claim arising out of or in connection with these Terms, their subject matter, formation, existence, negotiation, validity, termination, or enforceability, including any non-contractual obligations arising out of or in connection therewith, shall be governed by and construed in accordance with the laws of the Republic of India, without regard to any conflict-of-law rules or principles that would cause the application of the laws of any other jurisdiction. Subject to the dispute resolution provisions below, you irrevocably agree that the courts of competent jurisdiction located in Gurugram, Haryana, India shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms or their subject matter or formation.</p>
              <ul>
                <li><strong>Informal Resolution:</strong> Before initiating any formal dispute resolution proceeding, you agree to first contact the Operator in writing at the contact details provided in Section 15 and attempt in good faith to resolve the dispute informally. The Operator will endeavour to respond within thirty (30) calendar days of receipt of your notice. The informal resolution period shall last no less than sixty (60) calendar days from the date of the initial written notice, unless the parties agree in writing to a shorter period.</li>
                <li><strong>Arbitration:</strong> If a dispute cannot be resolved informally within the timeframe set out above, either party may refer the dispute to binding arbitration administered by a mutually agreed arbitral institution in accordance with its then-current arbitration rules. The seat of arbitration shall be Gurugram, Haryana, India. The language of arbitration shall be English. The arbitration award shall be final and binding on the parties and may be entered as a judgment in any court of competent jurisdiction.</li>
                <li><strong>Exception for Injunctive Relief:</strong> Notwithstanding the foregoing, nothing in this Section shall be construed to limit the right of either party to seek urgent injunctive, interim, or other equitable relief from a court of competent jurisdiction where such relief is necessary to prevent irreparable harm pending the conclusion of arbitration or other formal proceedings.</li>
                <li><strong>EU/EEA/UK Users:</strong> For users who are residents of the European Union, the European Economic Area, or the United Kingdom, nothing in these Terms shall operate to deprive such users of the protection of any mandatory provisions of the consumer protection, data protection, or other laws applicable in their country of habitual residence, and such users retain the right to bring proceedings before the courts of their country of habitual residence in respect of consumer claims or mandatory statutory rights.</li>
                <li><strong>Class Action Waiver:</strong> To the maximum extent permitted by applicable law, all claims between you and the Operator must be brought on an individual basis and not as a plaintiff or class member in any purported class, collective, consolidated, or representative proceeding. Neither you nor the Operator may participate in a class action arbitration or class-wide arbitration, class-wide litigation, or any other representative proceeding as to any claim covered by these Terms.</li>
              </ul>
            </Section>

            <Section title="15. Amendments to These Terms">
              <p>The Operator reserves the right to amend, revise, supplement, or update these Terms at any time and in its sole and absolute discretion, in order to reflect changes in applicable law or regulation, the nature, scope, or technical operation of the Service, the Operator&apos;s business practices, or for any other reason determined by the Operator to be appropriate or necessary. The Operator&apos;s policy on amendments and your obligations in relation thereto are as follows:</p>
              <ul>
                <li><strong>Notice of Material Amendments:</strong> Where the Operator determines that a proposed amendment is material in nature, the Operator shall endeavour to provide notice to registered users by sending an electronic mail message to the address associated with their account no less than fourteen (14) calendar days prior to the date on which the amended Terms are to take effect. A material amendment is one that materially and adversely affects your rights or obligations under these Terms.</li>
                <li><strong>Non-Material Amendments:</strong> For amendments that the Operator determines, in its sole discretion, to be non-material in nature, including corrections of typographical errors, clarifications of existing provisions, or updates of a purely administrative character, the Operator may update these Terms without prior notice. The updated Terms will be published on this page with an updated &quot;Last Updated&quot; date, and you are encouraged to review these Terms periodically.</li>
                <li><strong>Acceptance:</strong> Your continued use of the Service on or after the effective date of any amendment to these Terms shall constitute your unconditional acceptance of the amended Terms in their entirety. If you object to any amendment, your sole remedy is to discontinue your use of the Service and request deletion of your account prior to the effective date of such amendment.</li>
                <li><strong>Supersession:</strong> Any amendment that takes effect in accordance with this Section supersedes all prior versions of the amended provisions and, upon taking effect, the amended Terms shall be the entire agreement between you and the Operator in respect of the subject matter thereof.</li>
              </ul>
            </Section>

            <Section title="16. Miscellaneous Provisions">
              <p>The following miscellaneous provisions apply to these Terms and to the relationship between you and the Operator. Each of the provisions in this Section is an independent and separately enforceable provision intended to give effect to the parties&apos; agreement in the broadest possible manner, notwithstanding any failure or unenforceability of any other provision.</p>
              <ul>
                <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy (<a href="/privacy">journeex.neerajraisinghani.com/privacy</a>) and any other documents expressly incorporated herein by reference, constitute the entire agreement between you and the Operator with respect to the subject matter hereof and supersede all prior and contemporaneous understandings, negotiations, representations, warranties, and agreements, whether written or oral, relating to that subject matter.</li>
                <li><strong>Severability:</strong> If any provision of these Terms is held by a court or arbitrator of competent jurisdiction to be invalid, void, illegal, or unenforceable for any reason, that provision shall be modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its original intent as far as possible, and the remaining provisions of these Terms shall continue in full force and effect and shall not be affected, impaired, or invalidated.</li>
                <li><strong>No Waiver:</strong> No failure or delay by the Operator in exercising or enforcing any right, power, privilege, or remedy under or in connection with these Terms shall operate as a waiver of that right, power, privilege, or remedy. No single or partial exercise of any right, power, privilege, or remedy shall preclude any other or further exercise thereof or the exercise of any other right, power, privilege, or remedy. No waiver of any breach of these Terms shall constitute a waiver of any subsequent or continuing breach.</li>
                <li><strong>Assignment:</strong> You may not assign, transfer, delegate, charge, sub-contract, or deal in any other manner with any or all of your rights or obligations under these Terms, whether voluntarily or by operation of law, without the prior written consent of the Operator, and any purported assignment in violation of this restriction shall be void. The Operator may at any time assign, transfer, or sub-contract all or any part of its rights or obligations under these Terms to any person or entity without restriction, including in connection with any merger, acquisition, restructuring, reorganisation, or sale of all or substantially all of its assets, and you hereby consent to any such assignment.</li>
                <li><strong>No Third-Party Beneficiaries:</strong> These Terms are entered into solely between you and the Operator. Except as expressly provided in these Terms (including the indemnification provisions in Section 12), nothing herein is intended to, nor shall anything herein, confer on any third party any legal or equitable right, benefit, or remedy under or by reason of these Terms.</li>
                <li><strong>Force Majeure:</strong> The Operator shall not be liable to you for any delay, interruption, or failure to perform any obligation under these Terms to the extent that such delay, interruption, or failure results from causes beyond the Operator&apos;s reasonable control, including but not limited to acts of God, natural disasters, pandemics, epidemics, war, terrorism, civil unrest, government action, power outages, telecommunications failures, cyberattacks, or failures of third-party service providers.</li>
                <li><strong>Language:</strong> These Terms are drawn up in the English language. Where these Terms or any notice thereunder is translated into any other language, the English version shall in all events prevail.</li>
              </ul>
            </Section>

            <Section title="17. Contact Information">
              <p>All inquiries, notices, requests, formal legal correspondence, or other communications relating to these Terms of Service must be directed exclusively to the Operator in writing at the contact details set out below. The Operator shall endeavour to respond to all substantive enquiries within a reasonable time, but no response time is guaranteed. Communications sent by any means other than those specified below may not be received or actioned and shall not be deemed effective notice for the purposes of these Terms.</p>
              <ul>
                <li><strong>Controller / Operator:</strong> Neeraj Raisinghani, sole proprietor and operator of JourneeX</li>
                <li><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> (preferred channel for all enquiries)</li>
                <li><strong>Postal Address:</strong> {CONTACT_ADDRESS}</li>
                <li><strong>Service Website:</strong> <a href="https://journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">journeex.neerajraisinghani.com</a></li>
                <li><strong>Application URL:</strong> <a href="https://app.journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">app.journeex.neerajraisinghani.com</a></li>
                <li><strong>Response Time:</strong> The Operator will make commercially reasonable efforts to respond to all written enquiries within thirty (30) business days of receipt. Response times may vary depending on the nature and complexity of the enquiry and applicable legal requirements.</li>
              </ul>
            </Section>

          </div>
        </div>
      </section>

      <style>{`
        .legal-section { margin-bottom: 52px; }
        .legal-section h2 {
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: var(--ls-heading);
          color: var(--text);
          margin: 0 0 16px 0;
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
        }
        .legal-section p, .legal-section li {
          font-size: 0.9375rem;
          line-height: var(--lh-body);
          letter-spacing: var(--ls-body);
          color: var(--text-muted);
          margin: 0 0 12px 0;
          text-align: justify;
        }
        .legal-section ul { list-style-type: disc; padding-left: 28px; margin: 0 0 12px 0; }
        .legal-section li { list-style-type: disc; margin-bottom: 6px; }
        .legal-section a {
          color: #000;
          background: #f5e642;
          text-decoration: none;
          font-weight: 600;
          padding: 0;
          border-radius: 2px;
        }
        .legal-section a:hover { background: #e8d93a; }
        .legal-section strong { color: var(--text); font-weight: 600; }
        @media (max-width: 640px) {
          .legal-section p, .legal-section li { text-align: left; }
        }
      `}</style>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="legal-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
