import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How JourneeX handles your personal data, what is collected, who it is shared with, and your rights under GDPR, CCPA, and India's DPDP Act.",
};

const LAST_UPDATED = "November 4, 2026";
const CONTACT_EMAIL = "journeex@neerajraisinghani.com";
const CONTACT_ADDRESS = "2nd Floor, House No. 18, Roots Courtyard, Sector 48, Gurugram, Haryana, India 122018";

export default function PrivacyPage() {
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
          Privacy
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
            Privacy<br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--text-light-muted)" }}>
              Policy.
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

            <Section title="1. Identity and Contact Details of the Data Controller">
              <p>JourneeX is a personal artificial intelligence journaling platform created, owned, and operated solely by Neeraj Raisinghani, an individual residing at {CONTACT_ADDRESS} (hereinafter referred to as &quot;the Operator,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). For the purposes of all applicable data protection and privacy legislation, including but not limited to the Digital Personal Data Protection Act, 2023 of India (&quot;DPDP Act&quot;), the General Data Protection Regulation (EU) 2016/679 (&quot;GDPR&quot;), the UK General Data Protection Regulation (&quot;UK GDPR&quot;), and the California Consumer Privacy Act as amended by the California Privacy Rights Act of 2020 (&quot;CCPA/CPRA&quot;), the Operator acts as the Data Fiduciary and/or Data Controller with respect to all personal data collected, received, stored, used, processed, disclosed, or otherwise handled in connection with the provision of the Service. The Operator is the sole decision-maker with respect to the purposes and means of processing of Personal Data under this Policy, and bears full accountability for such processing. All data subject access requests, correction requests, erasure requests, portability requests, objection notices, complaints, and all other privacy-related correspondence must be directed exclusively to the Operator at the contact details set out below:</p>
              <ul>
                <li><strong>Name of Operator:</strong> Neeraj Raisinghani</li>
                <li><strong>Role:</strong> Data Controller / Data Fiduciary</li>
                <li><strong>Electronic Mail:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                <li><strong>Mailing Address:</strong> {CONTACT_ADDRESS}</li>
                <li><strong>Website:</strong> <a href="https://journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">journeex.neerajraisinghani.com</a></li>
                <li><strong>Application:</strong> <a href="https://app.journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">app.journeex.neerajraisinghani.com</a></li>
              </ul>
            </Section>

            <Section title="2. Scope and Application of This Privacy Policy">
              <p>This Privacy Policy (&quot;Policy&quot;) constitutes the Operator&apos;s formal and binding statement regarding the collection, receipt, storage, usage, processing, disclosure, transfer, protection, and destruction of Personal Data and Sensitive Personal Data obtained from or in relation to users of the JourneeX platform. This Policy is intended to be read in conjunction with, and is expressly incorporated by reference into, the JourneeX Terms of Service. In the event of any inconsistency between this Policy and the Terms of Service, this Policy shall prevail to the extent of any inconsistency relating to matters of data protection and privacy. This Policy applies in full to all of the following:</p>
              <ul>
                <li>All persons who access or browse the website at <a href="https://journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">journeex.neerajraisinghani.com</a>, whether or not they register for an account.</li>
                <li>All registered users of the web-based application accessible at <a href="https://app.journeex.neerajraisinghani.com" target="_blank" rel="noopener noreferrer">app.journeex.neerajraisinghani.com</a>.</li>
                <li>All persons who submit inquiries, requests, or messages through the contact form on the website.</li>
                <li>All persons who communicate with the Operator by electronic mail or any other means in connection with the Service.</li>
                <li>All users of the Service irrespective of their geographic location, nationality, citizenship, or residency, to the extent permitted by applicable law.</li>
              </ul>
              <p>By accessing or using any component of the Service in any manner, you unconditionally acknowledge that you have read, understood, and agree to the terms of this Policy. If you do not accept this Policy in its entirety, you must immediately discontinue your use of the Service and submit a request for deletion of any Personal Data previously provided to the Operator.</p>
            </Section>

            <Section title="3. Age Restrictions and Protection of Minors">
              <p>The Service is designed and intended exclusively for individuals who have attained the minimum age of thirteen (13) years. The Operator is committed to protecting the privacy of minors and strictly prohibits the use of the Service by children under the age of thirteen (13). This commitment is grounded in applicable child protection and data privacy legislation, including the Children&apos;s Online Privacy Protection Act (&quot;COPPA&quot;) of the United States to the extent applicable, and the provisions of the DPDP Act regarding the processing of personal data of children. The following restrictions and obligations apply with respect to minors:</p>
              <ul>
                <li>The Operator does not knowingly solicit, collect, store, process, or otherwise handle Personal Data from any individual under the age of thirteen (13) years.</li>
                <li>By registering for or using the Service, you represent and warrant that you are at least thirteen (13) years of age.</li>
                <li>Users between the ages of thirteen (13) and eighteen (18) years are classified as minors for the purposes of this Policy and are strongly advised to review this Policy in the presence of, and with the guidance of, a parent or legal guardian prior to creating an account or submitting any Personal Data.</li>
                <li>In the event that the Operator becomes aware, or has reasonable grounds to believe, that a registered user is under the age of thirteen (13), the Operator shall, without undue delay and in any event within seventy-two (72) hours of such discovery, take all necessary steps to permanently delete the relevant account and all associated Personal Data from its active systems.</li>
                <li>Encrypted backup copies of any such data shall be purged within ninety (90) days of the date of account deletion.</li>
                <li>Any person with knowledge or reasonable suspicion that a child under the age of thirteen (13) has registered for or is using the Service is requested to notify the Operator immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
                <li>The Operator reserves the right to request documentary proof of age from any user at any time and to suspend or terminate any account pending satisfactory verification of age eligibility.</li>
              </ul>
            </Section>

            <Section title="4. Categories of Personal Data Collected">
              <p>The Operator collects, receives, and processes only such categories of Personal Data as are strictly necessary for the specified purposes set out in Section 6 of this Policy, in accordance with the principle of data minimisation as recognised under applicable data protection legislation. The Operator does not engage in the collection of Personal Data in bulk or for speculative future purposes. The following categories of Personal Data are collected by the Operator in connection with the Service:</p>
              <ul>
                <li><strong>Account Registration Data:</strong> The user&apos;s electronic mail address, collected at the time of account creation exclusively for the purposes of user authentication, account management, account recovery, and the delivery of transactional electronic communications related to the Service.</li>
                <li><strong>Journal Entry Data:</strong> The full textual content of all journal entries authored and submitted by the user through the Platform. This data is stored in encrypted form within the Operator&apos;s database infrastructure and is transmitted exclusively via encrypted channels using industry-standard Transport Layer Security (&quot;TLS&quot;) protocols. Journal Entry Data is treated with the highest degree of confidentiality and is not accessed by the Operator outside of the specific processing purposes described in this Policy.</li>
                <li><strong>Usage and Behavioural Metadata:</strong> Technical and behavioural data generated automatically through the user&apos;s interaction with the Service, including but not limited to: entry creation timestamps; journaling streak counts and continuity data; mood indicators and tags selected by the user; weekly summary generation timestamps; feature interaction logs; and other metadata necessary to operate and maintain platform functionality including the weekly summary module and the habit tracking feature.</li>
                <li><strong>Contact Form Submission Data:</strong> When an individual submits the contact form on the website, the Operator collects the following personal data: full name, electronic mail address, telephone number (optional), and the free-text content of the message submitted. In addition to these form fields, the Operator automatically collects certain technical metadata associated with the form submission, including the submitting party&apos;s Internet Protocol (&quot;IP&quot;) address, approximate geographic location derived from the IP address (city, region, and country), the type of device used (desktop, tablet, or mobile), the browser software and version, the operating system, the date and time of the submission (recorded in Indian Standard Time), and the referring URL from which the user navigated to the contact page. This data is used solely for the purposes of: (a) responding to the specific inquiry submitted; (b) detecting and preventing fraudulent, automated, or abusive form submissions; and (c) maintaining security and operational integrity of the contact facility. This data is not used for any marketing, profiling, or advertising purpose.</li>
                <li><strong>Technical Session Data:</strong> Strictly necessary session cookie data used exclusively to maintain the authenticated state of a logged-in user session. No device fingerprinting, IP address logging for profiling, or persistent tracking identifiers are employed by the Service.</li>
                <li><strong>Analytics and Usage Data (Google Analytics):</strong> The Operator uses Google Analytics, a web analytics service operated by Google LLC (&quot;Google&quot;), to collect aggregated, anonymised data about how visitors interact with the website at journeex.neerajraisinghani.com and the web application at app.journeex.neerajraisinghani.com. Google Analytics collects and processes the following categories of data in connection with each user session: Internet Protocol (IP) address (which is anonymised prior to storage in accordance with the IP anonymisation configuration applied by the Operator); browser type, version, and language; operating system and device type; screen resolution; approximate geographic location derived from the anonymised IP address (country and city level); pages visited, the order in which they were visited, and the time spent on each page; referring URL and search terms that led the user to the website; click patterns, scroll depth, and other user interaction signals; session duration, session frequency, and returning visitor indicators; and unique session identifiers generated by Google Analytics cookies. This data is collected through the use of first-party and third-party cookies placed on the user&apos;s device by Google Analytics, specifically the cookies identified in Section 8 of this Policy. The data is transmitted to and stored on Google&apos;s servers, which may be located in the United States of America and other jurisdictions. Google Analytics data is used exclusively by the Operator for the purpose of understanding aggregate website traffic patterns, diagnosing technical issues, assessing the effectiveness of content, and informing product and marketing decisions. The Operator does not use Google Analytics to identify individual users, build individual user profiles, or combine analytics data with other personal data held by the Operator.</li>
              </ul>
              <p>The Operator expressly does not collect the following categories of data, unless such information is voluntarily included by the user within the free-text content of a journal entry:</p>
              <ul>
                <li>Full legal name or any government-issued identity document details.</li>
                <li>Telephone number or mobile device identifiers.</li>
                <li>Financial information, payment card details, or bank account information.</li>
                <li>Biometric data or facial recognition data.</li>
                <li>Precise geolocation data or GPS coordinates.</li>
                <li>Health, medical, or genetic data as defined under applicable law.</li>
                <li>Racial or ethnic origin, political opinions, religious beliefs, trade union membership, or sexual orientation.</li>
              </ul>
            </Section>

            <Section title="5. Lawful Basis for Processing Personal Data">
              <p>The Operator processes Personal Data only where a valid, identifiable, and documented lawful basis exists for such processing, as required under applicable data protection legislation. The Operator has identified the following lawful bases as applicable to its respective processing activities. For users located within the European Economic Area (&quot;EEA&quot;) or the United Kingdom, the lawful bases relied upon pursuant to Article 6 of the GDPR and the UK GDPR are as follows:</p>
              <ul>
                <li><strong>Performance of a Contract (Article 6(1)(b) GDPR):</strong> The processing of Account Registration Data (electronic mail address) and Journal Entry Data is necessary for the performance of the contractual relationship between the Operator and the user, specifically to deliver the core functionality of the Service, including the generation of AI-powered reflections and weekly summaries, the operation of the habit tracker, and the provision of all other features described in the Service.</li>
                <li><strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> The processing of Usage and Behavioural Metadata and Technical Session Data is carried out on the basis of the Operator&apos;s legitimate interests in operating, maintaining, debugging, and improving the technical functionality and security of the Platform, provided always that such processing does not override the fundamental rights, freedoms, or reasonable expectations of the data subject. The Operator has conducted a legitimate interests assessment and is satisfied that its interests are not overridden by the interests of data subjects in this context.</li>
                <li><strong>Compliance with Legal Obligations (Article 6(1)(c) GDPR):</strong> The Operator may process and retain certain Personal Data where such retention or processing is required by a statutory or regulatory obligation imposed on the Operator by the laws of India or any other applicable jurisdiction.</li>
                <li><strong>Consent (Article 6(1)(a) GDPR):</strong> The Operator relies on consent as the lawful basis for the deployment of non-essential analytics cookies through Google Analytics on the website. Prior to the activation of Google Analytics tracking, the Operator presents users located in the EEA and United Kingdom with a cookie consent notice through which freely given, specific, informed, and unambiguous consent is obtained. The Operator shall not activate Google Analytics or deploy any non-essential analytics cookies prior to receiving valid consent from EEA and UK users. Such consent may be withdrawn at any time without detriment by clearing the browser&apos;s cookies and local storage for this site, or by contacting the Operator at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. For users outside the EEA and United Kingdom, the Operator relies on its legitimate interest in understanding website performance as the lawful basis for analytics processing, subject to the right to object described in Section 10.</li>
              </ul>
              <p>For users located in India, all processing of Personal Data is conducted in accordance with the Digital Personal Data Protection Act, 2023, and the rules made thereunder, on the basis of consent provided at the time of account registration or as otherwise permitted under that Act. For users located in California, processing is conducted in accordance with the California Consumer Privacy Act of 2018 as amended by the California Privacy Rights Act of 2020.</p>
            </Section>

            <Section title="6. Purposes of Processing and Use of Personal Data">
              <p>The Operator processes the Personal Data collected from and about users of the Service solely for the following specified, explicit, and legitimate purposes, in accordance with the principle of purpose limitation as recognised under applicable data protection legislation. Personal Data collected for one purpose shall not be used for a different, incompatible purpose without the prior knowledge and, where required, the prior consent of the data subject. The specified purposes for which Personal Data is processed are:</p>
              <ul>
                <li><strong>AI Reflection Generation:</strong> To transmit Journal Entry Data to a third-party AI service provider for the sole purpose of generating a personalised, contextually relevant AI reflection in direct response to each individual journal entry submitted by the user through the Platform.</li>
                <li><strong>Weekly Summary Generation:</strong> To process Journal Entry Data and Usage Metadata accumulated over a given seven-day period to produce and deliver an automated weekly AI-generated summary of the user&apos;s journaling activity.</li>
                <li><strong>Platform Feature Operation:</strong> To operate, render functional, and maintain all platform features offered through the Service, including but not limited to: full-text search across journal entries; journaling streak tracking and continuity monitoring; mood pattern tracking and visualisation; habit tracking features; and any other features introduced by the Operator from time to time.</li>
                <li><strong>Transactional Communications:</strong> To dispatch transactional electronic communications to the user&apos;s registered electronic mail address, strictly limited to: account creation confirmation notifications; electronic mail address verification messages; password reset requests; and other communications that are strictly necessary for the continued operation and security of the user&apos;s account.</li>
                <li><strong>Contact Form Responses:</strong> To receive, review, and respond to inquiries, support requests, and other messages submitted by individuals through the contact form facility on the website.</li>
                <li><strong>Legal Compliance and Enforcement:</strong> To comply with all applicable legal obligations, court orders, regulatory requirements, and lawful directions of competent authorities; to enforce the Operator&apos;s Terms of Service and other policies; to investigate and address breaches of the Terms of Service; and to protect the legal rights, property, and interests of the Operator, its users, and third parties.</li>
                <li><strong>Security and Fraud Prevention:</strong> To monitor, detect, investigate, and prevent security incidents, fraudulent activity, abuse of the Service, and other harmful or unauthorised conduct in connection with the Platform.</li>
              </ul>
              <p>The Operator expressly and unconditionally warrants that it shall not, under any circumstances, use, process, or repurpose any Journal Entry Data for the following prohibited purposes:</p>
              <ul>
                <li>Targeted advertising or behavioural advertising of any kind.</li>
                <li>User profiling for commercial, marketing, or analytical purposes unrelated to the provision of the Service.</li>
                <li>Sale, rental, or transfer of Personal Data to any third party for commercial gain.</li>
                <li>Training, fine-tuning, evaluation, benchmarking, or improvement of any artificial intelligence or machine learning model, whether operated by the Operator or any third party.</li>
                <li>Any purpose not specified in this Section without prior disclosure to and, where required, prior consent of the user.</li>
              </ul>
            </Section>

            <Section title="7. Disclosure of Personal Data to Third Parties">
              <p>The Operator operates on a strict principle of data minimisation with respect to third-party disclosures and shall not sell, rent, lease, trade, disclose, or otherwise transfer Personal Data to any third party for commercial, marketing, advertising, or other unauthorised purposes under any circumstances. Personal Data is disclosed to third parties only in the following narrowly defined and documented circumstances, and only to the minimum extent strictly necessary for the stated purpose:</p>
              <ul>
                <li><strong>Database and Authentication Infrastructure Provider:</strong> The Operator utilises a third-party cloud database and authentication infrastructure provider to host, store, and manage Account Registration Data, Journal Entry Data, and Usage Metadata on behalf of the Operator. This provider processes such data solely in its capacity as a data processor acting on the documented instructions of the Operator, pursuant to a Data Processing Agreement that imposes contractual obligations of confidentiality, data security, restricted processing, and compliance with applicable data protection law.</li>
                <li><strong>Third-Party Artificial Intelligence Service Providers:</strong> The Operator engages one or more third-party providers of large language model API services for the sole purpose of generating AI reflections and weekly summaries in response to user journal entries. The specific identity of the AI provider(s) in use may change over time. Regardless of the provider in use at any given time, all AI service providers engaged by the Operator are contractually bound to: (a) process Journal Entry Data solely for the purpose of fulfilling the individual API request; (b) refrain from retaining Journal Entry Data beyond the lifecycle of the individual API request; (c) refrain from using Journal Entry Data for model training, fine-tuning, evaluation, or any secondary purpose; and (d) maintain appropriate technical and organisational security measures.</li>
                <li><strong>Transactional Email Delivery Provider:</strong> The Operator uses a third-party transactional email delivery service to transmit electronic mail communications arising from contact form submissions, including: (a) a notification to the Operator containing the details of the submission; and (b) an automated confirmation message to the individual who submitted the form. In connection with each such transmission, the email provider processes the recipient&apos;s electronic mail address, the content of the email, and certain technical delivery metadata including IP addresses and delivery timestamps. This provider acts as a data processor on the Operator&apos;s behalf and is contractually prohibited from using this data for any purpose other than the delivery of the specified email. The Operator does not use this service for any marketing, promotional, or bulk email campaigns.</li>
                <li><strong>Google reCAPTCHA Enterprise (Bot Detection and Fraud Prevention):</strong> The Operator integrates Google reCAPTCHA Enterprise, a service operated by Google LLC, into the contact form on the website for the purpose of detecting and preventing automated bot submissions, spam, and fraudulent form activity. When a user submits the contact form, Google reCAPTCHA Enterprise analyses user interaction signals, including mouse movements, keystrokes, browsing behaviour on the page, IP address, browser characteristics, cookies, and other device and session data, and returns a risk score indicating the likelihood that the interaction is legitimate. This analysis is performed by Google LLC and is subject to Google&apos;s Privacy Policy and Terms of Service. The Operator does not control the data collected and processed by Google LLC in connection with reCAPTCHA Enterprise, and users are encouraged to review Google&apos;s privacy documentation at policies.google.com. The Operator uses the reCAPTCHA score solely to determine whether to accept or reject a given form submission and does not share the score or any reCAPTCHA-derived data with any third party. Users who object to the use of Google reCAPTCHA Enterprise may contact the Operator directly by electronic mail at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> as an alternative to using the contact form.</li>
                <li><strong>Disclosure Required by Law:</strong> The Operator may disclose Personal Data to a government authority, law enforcement agency, court, regulatory body, or other public authority where such disclosure is required or compelled by applicable law, court order, legal process, or lawful regulatory direction. In such circumstances, the Operator shall: (a) disclose only the minimum amount of Personal Data strictly required; (b) where legally permissible, notify the affected user prior to making such disclosure; and (c) use all reasonable legal means available to limit the scope of any compelled disclosure.</li>
                <li><strong>Business Succession:</strong> In the event of a merger, acquisition, restructuring, asset sale, or other transfer of all or substantially all of the Operator&apos;s business or assets, Personal Data held by the Operator may be transferred to the successor entity, provided that such entity agrees to be bound by the terms of this Policy or provides protections at least equivalent to those described herein. Affected users shall be notified of any such transfer in advance.</li>
                <li><strong>Google LLC (Google Tag Manager and Google Analytics 4 — Website and Application Analytics):</strong> The Operator uses Google Tag Manager (&quot;GTM&quot;), a tag management system operated by Google LLC, to deploy and manage third-party tracking scripts and analytics tags on both the website at journeex.neerajraisinghani.com and the web application at app.journeex.neerajraisinghani.com. Google Tag Manager itself does not collect personal data or set cookies; however, it serves as the delivery mechanism through which the Operator deploys Google Analytics 4 and potentially other analytics or measurement tags. When activated, the GTM container script loads in the user&apos;s browser and, subject to consent where required by applicable law, fires configured analytics tags including the Google Analytics 4 measurement tag. The Operator integrates Google Analytics 4, a web analytics service operated by Google LLC, into both the website and the web application through Google Tag Manager for the purpose of collecting aggregated, anonymised data about visitor and user interactions. When a user visits the website and, where required by applicable law, provides consent through the cookie consent mechanism, Google Analytics places cookies on the user&apos;s device and transmits data regarding the user&apos;s session, page views, clicks, referral sources, device characteristics, and approximate geographic location to Google&apos;s servers. The Operator has enabled IP anonymisation within the Google Analytics configuration, meaning that the full IP address of website visitors is not stored or processed by Google in an identifiable form. Google LLC processes this data as a data processor acting on the Operator&apos;s instructions and, as a data controller in its own right, in connection with its broader analytics and advertising services. Google LLC&apos;s processing of data through Google Analytics is subject to Google&apos;s own Privacy Policy and Terms of Service. The Operator does not use Google Analytics for the purpose of serving targeted advertising and has not enabled Google Signals or any Google advertising features within its Google Analytics implementation. The Operator uses the aggregated analytics data solely to understand website traffic patterns, assess the effectiveness of content, identify technical issues, and inform product decisions. The specific cookies deployed by Google Analytics are described in Section 8 of this Policy.</li>
                <li><strong>Product Analytics Provider (Application):</strong> The Operator uses a third-party product analytics platform within the JourneeX web application accessible at app.journeex.neerajraisinghani.com, for the purpose of collecting anonymised data about how registered users interact with the application interface and its features. This provider collects data including but not limited to: feature interaction events (such as the creation of a journal entry, the viewing of a weekly summary, or the activation of the habit tracker); session duration and frequency within the application; click patterns, navigation flows, and user journey data within the application interface; device type, browser, and operating system; and approximate geographic location. This data is used exclusively to understand how users engage with application features, to identify usability issues, to inform product development decisions, and to improve the overall user experience of the Service. The Operator has configured this analytics provider to avoid collection of the full textual content of journal entries or other sensitive User Content. This provider processes data as a data processor acting on the Operator&apos;s instructions.</li>
              </ul>
              <p>The Operator expressly does not share, transmit, or disclose Personal Data to any advertising network, data broker, data aggregator, social media platform, or any third party for purposes of cross-context behavioural advertising or commercial profiling.</p>
            </Section>

            <Section title="8. Cookies and Tracking Technologies">
              <p>The Operator uses a combination of strictly necessary cookies and non-essential analytics cookies in connection with the Service. The following provides a complete description of the cookies and tracking technologies deployed across the website and the web application, together with the purposes for which each is used, the lawful basis for deployment, and the options available to users who wish to manage or withdraw consent to non-essential cookies. The Operator is committed to full transparency regarding all cookies and tracking technologies used in connection with the Service, and to obtaining required consents before deploying any non-essential cookies to users located in jurisdictions where such consent is mandatory under applicable law.</p>
              <ul>
                <li><strong>Strictly Necessary Session Cookies (Website and Application):</strong> The Service uses strictly necessary session cookies that are technically indispensable for maintaining the authenticated state of a logged-in user session within the JourneeX application. These cookies contain no personally identifiable information beyond a session token used to associate the browser session with the user&apos;s authenticated account. They do not track user behaviour across third-party websites or applications, are not used for advertising or profiling purposes, and are automatically invalidated upon logout or session expiry. As these cookies are essential to the technical operation of the Service, they are deployed without requiring user consent and cannot be disabled through the cookie consent mechanism without preventing the user from accessing the authenticated features of the Service.</li>
                <li><strong>Google Tag Manager and Google Analytics Cookies (Website and Application):</strong> Google Tag Manager is loaded on both the website and the JourneeX web application to manage the deployment of analytics tags. GTM itself does not set cookies or collect personal data, but it fires the Google Analytics 4 measurement tag which deploys the following analytics cookies on the user&apos;s device, subject to obtaining valid consent where required by applicable law: (a) <strong>_ga</strong> — a persistent cookie, retained for a default period of two (2) years, used by Google Analytics to distinguish unique users by assigning a randomly generated identifier to each visitor, enabling the measurement of unique visitor counts and the association of multiple sessions from the same browser; (b) <strong>_ga_[container-id]</strong> — a persistent cookie, retained for a default period of two (2) years, used to persist the Google Analytics session state for GA4 measurement; (c) <strong>_gid</strong> — a persistent cookie, retained for twenty-four (24) hours, used to distinguish users and store information about how they use the website across a single day; and (d) <strong>_gat</strong> — a session cookie used to throttle the request rate to Google&apos;s data collection servers, retained for one (1) minute. All of these cookies are placed by Google Analytics and are subject to Google&apos;s privacy policy. The Operator has enabled IP anonymisation within its Google Analytics configuration to prevent the storage of full IP addresses. Google Analytics cookies are categorised as non-essential analytics cookies and, where required by applicable law (including for users in the EU, EEA, and UK), are deployed only upon receipt of the user&apos;s prior informed consent through the cookie consent notice displayed on the website.</li>
                <li><strong>Cookie Consent Mechanism:</strong> The Operator displays a cookie consent notice at the bottom of the website upon the first visit of any user. This notice informs the user of the categories of cookies deployed, provides a summary of the purposes for which each category is used, and offers the user a clear and unambiguous choice to accept or decline non-essential analytics cookies. The user&apos;s consent preference is recorded in the browser&apos;s local storage and honoured on all subsequent visits. Google Analytics cookies are not activated until and unless the user affirmatively accepts analytics cookies through the consent notice. Users may withdraw or change their consent at any time by clearing the site&apos;s data from their browser settings or by contacting the Operator at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
                <li><strong>No Advertising or Retargeting Cookies:</strong> The Operator does not deploy advertising cookies, retargeting cookies, third-party tracking pixels, cross-site tracking mechanisms, or any other cookies or tracking technologies whose primary purpose is to monitor user behaviour across third-party websites, build individual user profiles, or serve targeted or behavioural advertising. The Operator has not enabled Google Signals, Google Advertising Features, or any remarketing functionality within its Google Analytics implementation.</li>
                <li><strong>Product Analytics (Application Only):</strong> Within the JourneeX web application at app.journeex.neerajraisinghani.com, the Operator uses a third-party product analytics provider for the purposes described in Section 7 of this Policy. This provider may store a persistent identifier in the browser&apos;s local storage or deploy first-party cookies to associate multiple sessions from the same user within the application interface. This tracking occurs within the authenticated application environment and is used solely for internal product analytics purposes.</li>
                <li><strong>Future Cookie Deployments:</strong> In the event that the Operator introduces any additional cookies or tracking technologies not described in this Section, this Policy shall be updated prior to such deployment, affected users shall be notified in the manner described in Section 14, and any required consents shall be obtained in advance of deployment.</li>
              </ul>
            </Section>

            <Section title="9. Retention of Personal Data">
              <p>The Operator retains Personal Data only for so long as is strictly necessary to fulfil the purposes for which it was originally collected, to perform the contractual obligations owed to the user, or as required or permitted by applicable law, whichever period is the longer. The Operator applies the principle of storage limitation and does not retain Personal Data beyond the periods specified below. The specific retention periods applicable to each category of Personal Data are as follows:</p>
              <ul>
                <li><strong>Account Registration Data and Journal Entry Data:</strong> Retained for the duration of the user&apos;s active account. Processing of this data for the purposes described in Section 6 continues for as long as the user&apos;s account remains active and in use.</li>
                <li><strong>Usage and Behavioural Metadata:</strong> Retained for the duration of the user&apos;s active account, to enable the continued operation of features such as streak tracking, mood history, and weekly summaries. Deleted concurrently with Account Registration Data and Journal Entry Data upon account deletion.</li>
                <li><strong>Post-Deletion Active System Deletion:</strong> Upon the permanent deletion of a user account, all Personal Data associated with that account shall be permanently and irreversibly deleted from all active production systems and databases within thirty (30) calendar days of the account deletion date.</li>
                <li><strong>Encrypted Backup Purge:</strong> Encrypted backup copies of Personal Data, maintained solely for system resilience and disaster recovery purposes, shall be purged from all backup storage media within ninety (90) calendar days of the account deletion date.</li>
                <li><strong>Contact Form Submission Data:</strong> Retained for a maximum period of twelve (12) months from the date of the original submission, after which it shall be permanently deleted from all systems.</li>
                <li><strong>Legal Hold:</strong> Notwithstanding the retention periods specified above, the Operator may retain Personal Data for a longer period where such retention is required by a court order, legal process, regulatory requirement, or other applicable statutory obligation, strictly for the duration and to the extent required by such obligation.</li>
              </ul>
              <p>Upon expiry of the applicable retention period, Personal Data shall be securely deleted or anonymised such that it can no longer be associated with any identifiable individual. The Operator does not retain Personal Data in an identifiable form beyond the periods specified in this Section.</p>
            </Section>

            <Section title="10. Rights of Data Subjects">
              <p>Subject to the conditions, limitations, and exceptions prescribed under applicable data protection law, users of the Service are entitled to exercise specific rights with respect to their Personal Data. The Operator is committed to facilitating the exercise of these rights in a timely and transparent manner. All requests to exercise data subject rights should be submitted in writing to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. The Operator shall acknowledge receipt of all such requests promptly and shall provide a substantive response within thirty (30) calendar days of receipt of a verifiable request, subject to any extensions permitted under applicable law. Where the volume or complexity of requests warrants an extension, the Operator shall notify the requesting data subject of the extension and the reasons therefor within the initial thirty (30) day period.</p>

              <p><strong>10.1 Rights Applicable to All Users</strong></p>
              <p>All users of the Service, irrespective of their jurisdiction of residence, are entitled to exercise the following rights:</p>
              <ul>
                <li><strong>Right of Access:</strong> The right to request and receive confirmation as to whether the Operator processes Personal Data concerning them and, where such processing occurs, to receive a copy of that Personal Data together with information about the purposes of processing, the categories of data processed, the recipients or categories of recipients to whom data has been disclosed, and the applicable retention periods.</li>
                <li><strong>Right to Rectification / Correction:</strong> The right to request the correction, updating, or completion of any Personal Data held by the Operator that is inaccurate, incomplete, or outdated, without undue delay.</li>
                <li><strong>Right to Erasure / Deletion:</strong> The right to request the permanent deletion of the user&apos;s account and all associated Personal Data, subject to any legal retention obligations that may prevent immediate deletion. Erasure will be completed in accordance with the retention timelines set out in Section 9 of this Policy.</li>
              </ul>

              <p><strong>10.2 Additional Rights for Users in the EU, EEA, and United Kingdom (GDPR / UK GDPR)</strong></p>
              <p>In addition to the rights set out in Section 10.1, users located within the European Union, the European Economic Area, or the United Kingdom are entitled under the GDPR and UK GDPR to the following additional rights:</p>
              <ul>
                <li><strong>Right to Object:</strong> The right to object at any time to the processing of Personal Data where such processing is based on the Operator&apos;s legitimate interests (Article 6(1)(f) GDPR). Upon receipt of a valid objection, the Operator shall cease such processing unless it can demonstrate compelling legitimate grounds for the processing that override the interests, rights, and freedoms of the data subject, or where processing is necessary for the establishment, exercise, or defence of legal claims.</li>
                <li><strong>Right to Restriction of Processing:</strong> The right to request the restriction of processing of Personal Data in the circumstances prescribed under Article 18 of the GDPR, including where the accuracy of the data is contested, where processing is unlawful but the data subject opposes erasure, or where the Operator no longer needs the data but the data subject requires it for legal claims.</li>
                <li><strong>Right to Data Portability:</strong> The right to receive Personal Data provided to the Operator in a structured, commonly used, and machine-readable format, and to transmit such data to another data controller where technically feasible, in circumstances where processing is based on consent or contract and is carried out by automated means.</li>
                <li><strong>Right to Lodge a Complaint:</strong> The right to lodge a complaint with the competent national supervisory authority in the EU member state or UK territory of habitual residence, place of work, or the place of the alleged infringement, if the data subject believes that the processing of their Personal Data infringes applicable data protection law.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, the right to withdraw that consent at any time without detriment, without affecting the lawfulness of processing carried out prior to withdrawal.</li>
              </ul>

              <p><strong>10.3 Rights of California Residents (CCPA / CPRA)</strong></p>
              <p>California residents are entitled under the CCPA as amended by the CPRA to exercise the following rights:</p>
              <ul>
                <li><strong>Right to Know:</strong> The right to request disclosure of the categories of Personal Information collected; the categories of sources from which it was collected; the business or commercial purpose for collection, use, or sharing; the categories of third parties to whom Personal Information is disclosed; and the specific pieces of Personal Information collected about the requesting consumer.</li>
                <li><strong>Right to Delete:</strong> The right to request the deletion of Personal Information collected from the consumer, subject to exceptions prescribed under the CCPA/CPRA including where retention is necessary for the completion of a transaction, for security purposes, for legal compliance, or for other internal uses compatible with the context in which the information was provided.</li>
                <li><strong>Right to Opt-Out of Sale or Sharing:</strong> The right to opt out of the sale of Personal Information or the sharing of Personal Information for cross-context behavioural advertising. The Operator hereby expressly represents and warrants that it does not sell Personal Information and does not share Personal Information for cross-context behavioural advertising purposes. This right is therefore already fully honoured by the Operator&apos;s existing practices.</li>
                <li><strong>Right to Correct:</strong> The right to request the correction of inaccurate Personal Information maintained by the Operator, taking into account the nature of the Personal Information and the purposes of processing.</li>
                <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> The right to limit the use and disclosure of Sensitive Personal Information to those uses that are necessary to provide the services reasonably expected by an average consumer. The Operator does not use Sensitive Personal Information for any purpose beyond the provision of the Service.</li>
                <li><strong>Right to Non-Discrimination:</strong> The right not to be discriminated against for exercising any rights conferred under the CCPA/CPRA, including by being denied goods or services, charged different prices or rates, provided a different level or quality of goods or services, or subjected to any other form of adverse treatment in retaliation for the exercise of privacy rights.</li>
              </ul>

              <p><strong>10.4 Rights of Users in India (Digital Personal Data Protection Act, 2023)</strong></p>
              <p>Users located in India are entitled under the Digital Personal Data Protection Act, 2023 and the rules made thereunder to exercise the following rights as Data Principals:</p>
              <ul>
                <li><strong>Right to Access Information:</strong> The right to obtain from the Operator a summary of the Personal Data being processed, the processing activities being carried out, and information regarding the identities of all Data Fiduciaries and Data Processors to whom Personal Data has been or is being disclosed.</li>
                <li><strong>Right to Correction and Erasure:</strong> The right to request the correction of inaccurate or misleading Personal Data; the completion of incomplete Personal Data; and the erasure of Personal Data where the purpose for which it was collected has been fulfilled or is no longer necessary, or where consent to processing has been withdrawn.</li>
                <li><strong>Right to Grievance Redressal:</strong> The right to have grievances addressed by the Operator in an expeditious manner, and to escalate unresolved grievances to the Data Protection Board of India established under the DPDP Act.</li>
                <li><strong>Right of Nomination:</strong> The right to nominate another individual to exercise the rights conferred under the DPDP Act on behalf of the Data Principal in the event of the Data Principal&apos;s death or incapacity.</li>
                <li><strong>Right to Withdraw Consent:</strong> The right to withdraw consent to the processing of Personal Data at any time. Withdrawal of consent shall not affect the lawfulness of processing carried out prior to withdrawal. However, withdrawal of consent to processing that is necessary for the provision of the Service may result in the Operator being unable to continue providing the Service.</li>
              </ul>
            </Section>

            <Section title="11. Personal Data Breach Notification">
              <p>The Operator maintains documented internal procedures for the detection, investigation, assessment, containment, and notification of Personal Data breaches. In the event that the Operator becomes aware of a Personal Data breach involving Personal Data processed by or on behalf of the Operator, the Operator shall take the following steps in accordance with applicable law:</p>
              <ul>
                <li><strong>Internal Assessment:</strong> Upon becoming aware of an actual or suspected Personal Data breach, the Operator shall immediately commence an internal assessment to determine the nature, scope, and likely consequences of the breach, the categories and approximate number of data subjects affected, and the categories and approximate volume of Personal Data records affected.</li>
                <li><strong>Regulatory Notification (GDPR):</strong> Where the breach is likely to result in a risk to the rights and freedoms of natural persons, the Operator shall notify the competent supervisory authority under the GDPR, without undue delay and where feasible within seventy-two (72) hours of becoming aware of the breach, in accordance with Article 33 of the GDPR. Where notification cannot be made within seventy-two (72) hours, it shall be accompanied by reasons for the delay.</li>
                <li><strong>User Notification (GDPR):</strong> Where the breach is likely to result in a high risk to the rights and freedoms of natural persons, the Operator shall notify affected data subjects without undue delay in accordance with Article 34 of the GDPR, using clear and plain language describing the nature of the breach, the likely consequences, the measures taken or proposed to address the breach, and the contact details of the Operator.</li>
                <li><strong>Regulatory and User Notification (DPDP Act):</strong> In accordance with the Digital Personal Data Protection Act, 2023 and the rules made thereunder, the Operator shall notify the Data Protection Board of India and all affected Data Principals of any Personal Data breach in the prescribed form and within the prescribed timeframes.</li>
                <li><strong>Breach Register:</strong> The Operator shall maintain a written record of all Personal Data breaches, including those that do not require notification to supervisory authorities or data subjects, documenting the facts relating to the breach, its effects, and the remedial action taken, in accordance with Article 33(5) of the GDPR.</li>
                <li><strong>Remediation:</strong> The Operator shall take all technically and organisationally feasible steps to contain, remediate, and prevent recurrence of any Personal Data breach, and shall cooperate fully with any investigation conducted by a competent supervisory authority.</li>
              </ul>
            </Section>

            <Section title="12. International Transfers of Personal Data">
              <p>The Operator is established and operated from India. However, by virtue of its engagement with certain third-party infrastructure providers and AI service providers, Personal Data collected by the Operator in connection with the Service may be transferred to, stored in, and processed in jurisdictions outside of India. The following describes the international transfer arrangements applicable to the Service:</p>
              <ul>
                <li><strong>Nature of International Transfers:</strong> Personal Data may be transferred to the United States of America and potentially other jurisdictions in connection with the services provided by Supabase, Inc. (database and authentication infrastructure) and third-party AI API providers engaged by the Operator for the purpose of generating AI reflections and summaries.</li>
                <li><strong>GDPR Safeguards for EEA and UK Data:</strong> Where Personal Data originating from users located in the EEA or the United Kingdom is transferred to a third country not recognised by the European Commission as providing an adequate level of data protection, the Operator shall ensure that appropriate safeguards are in place, which may include: Standard Contractual Clauses as approved by the European Commission pursuant to Article 46(2)(c) of the GDPR; the International Data Transfer Agreement or addendum approved by the UK Information Commissioner&apos;s Office; adequacy decisions where applicable; or such other appropriate safeguard mechanisms as are recognised under Chapter V of the GDPR or equivalent UK legislation.</li>
                <li><strong>DPDP Act Cross-Border Transfers:</strong> Cross-border transfers of Personal Data of users located in India shall be conducted in accordance with Section 16 of the Digital Personal Data Protection Act, 2023 and any notifications or rules issued thereunder specifying the countries to which transfers may or may not be made.</li>
                <li><strong>Contractual Protections:</strong> All third-party service providers to whom Personal Data is transferred internationally are contractually obligated to implement and maintain appropriate technical and organisational security measures to protect such data against unauthorised access, disclosure, loss, or destruction.</li>
                <li><strong>Further Information:</strong> Users who require further information regarding the specific safeguards applied to international transfers of their Personal Data, or who wish to obtain a copy of the relevant transfer mechanisms in place, may submit a request to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
              </ul>
            </Section>

            <Section title="13. Security Measures">
              <p>The Operator implements and maintains appropriate technical and organisational security measures designed to protect Personal Data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, or access, in accordance with Article 32 of the GDPR, the security obligations prescribed under the DPDP Act, and recognised industry standards. The Operator acknowledges that no method of electronic storage or data transmission over the internet is entirely free from security risk, and accordingly the Operator continuously reviews and updates its security practices. The following security measures are currently implemented by the Operator:</p>
              <ul>
                <li><strong>Encryption in Transit:</strong> All Personal Data transmitted between the user&apos;s browser or device and the Operator&apos;s servers is encrypted using industry-standard Transport Layer Security (&quot;TLS&quot;) protocols, preventing interception or tampering during transmission.</li>
                <li><strong>Encryption at Rest:</strong> Journal Entry Data and other Personal Data stored within the Operator&apos;s database infrastructure is encrypted at rest, ensuring that unauthorised access to storage media does not result in exposure of readable Personal Data.</li>
                <li><strong>Access Controls:</strong> Access to production systems, databases, and Personal Data is restricted exclusively to the Operator. The principle of least privilege is applied, meaning that access is granted only to the extent necessary to perform the specific operational function required.</li>
                <li><strong>Secure Authentication Infrastructure:</strong> Account authentication is managed through the Supabase authentication service, which implements industry-standard secure authentication practices including hashed and salted password storage and secure session management.</li>
                <li><strong>Periodic Security Review:</strong> The Operator periodically reviews its security practices, infrastructure configurations, and third-party service provider security postures to identify and address potential vulnerabilities.</li>
                <li><strong>Incident Response:</strong> In the event of a security incident that results in or is likely to result in a Personal Data breach, the Operator shall act in accordance with the breach notification obligations set out in Section 11 of this Policy.</li>
              </ul>
              <p>Notwithstanding the security measures described above, the Operator cannot guarantee the absolute security of Personal Data. Users are encouraged to use strong, unique passwords, to log out of the Service when using shared or public devices, and to notify the Operator immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> if they suspect any unauthorised access to or use of their account.</p>
            </Section>

            <Section title="14. Amendments to This Privacy Policy">
              <p>The Operator reserves the right to amend, modify, supplement, or update this Policy at any time and from time to time, in its sole discretion, in order to reflect changes in applicable law or regulatory guidance, changes in the nature or scope of the Service, changes in the Operator&apos;s data processing practices, or for any other reason the Operator deems appropriate. The Operator undertakes to handle all amendments in accordance with the following procedure:</p>
              <ul>
                <li><strong>Material Amendments:</strong> In the event of any material amendment to this Policy, meaning any change that materially affects the rights of users or the manner in which their Personal Data is processed, the Operator shall provide advance notice to all registered users by electronic mail to the address associated with their account no less than fourteen (14) calendar days prior to the date on which the amended Policy shall take effect.</li>
                <li><strong>Publication of Revised Policy:</strong> The revised Policy shall be published on this page with an updated &quot;Last Updated&quot; date prominently displayed at the top of the page.</li>
                <li><strong>Acceptance of Amended Policy:</strong> Continued use of the Service following the effective date of any amendment to this Policy shall constitute the user&apos;s unconditional acknowledgment and acceptance of the amended Policy in its entirety.</li>
                <li><strong>Rejection of Amended Policy:</strong> Users who do not accept the amended Policy must discontinue their use of the Service prior to the effective date of the amendment and may submit a request for deletion of their account and associated Personal Data in accordance with Section 10 of this Policy.</li>
                <li><strong>Non-Material Amendments:</strong> Non-material amendments, such as typographical corrections, clarifications, or updates that do not affect user rights or processing practices, may be made without advance notice, though the &quot;Last Updated&quot; date will be updated accordingly.</li>
              </ul>
            </Section>

            <Section title="15. Contact and Grievance Redressal">
              <p>The Operator is committed to addressing all privacy-related inquiries, requests, and complaints in a timely, transparent, and respectful manner. All communications relating to this Privacy Policy, the exercise of data subject rights, data processing concerns, or any other privacy-related matter should be directed to the Operator at the contact details set out below. The Operator shall acknowledge receipt of all written communications within a reasonable period and shall use its best endeavours to resolve all complaints and requests within the timeframes prescribed under applicable law:</p>
              <ul>
                <li><strong>Name:</strong> Neeraj Raisinghani</li>
                <li><strong>Role:</strong> Data Controller / Data Fiduciary</li>
                <li><strong>Electronic Mail:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
                <li><strong>Mailing Address:</strong> {CONTACT_ADDRESS}</li>
              </ul>
              <p>Users located in India who are not satisfied with the Operator&apos;s response to a grievance may escalate the matter to the Data Protection Board of India in accordance with the Digital Personal Data Protection Act, 2023. Users located in the EU or EEA who are not satisfied with the Operator&apos;s response may lodge a complaint with the relevant national data protection supervisory authority in their country of habitual residence. Users located in the United Kingdom may escalate unresolved complaints to the Information Commissioner&apos;s Office (&quot;ICO&quot;).</p>
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
