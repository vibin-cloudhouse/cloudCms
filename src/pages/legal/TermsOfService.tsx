import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Scale, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
       
      <div className="flex items-center mt-16 mb-6">
        <Button asChild variant="ghost" className="p-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>
    <div className="flex justify-center">
 <div className="bg-white dark:bg-slate-800 shadow-md rounded-2xl max-w-5xl p-8 mb-8">
<div className="max-w-4xl m mx-auto">
        <div className="my-16 text-center">
          <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Effective DEC 22, 2024</p>
        </div>

        <div className="flex-col px-8 flex gap-6">
          <p>
            THESE TERMS OF SERVICE AGREEMENT, CLOUDSTICK’S PRIVACY POLICY AND
            ALL OTHER APPLICABLE TERMS (COLLECTIVELY, THE “AGREEMENT”) GOVERN
            YOUR USE OF ANY CLOUDSTICK SERVICES OR SOFTWARE (COLLECTIVELY, THE
            “SERVICE”). AS USED IN THIS AGREEMENT, “CLOUDSTICK”, “US”, OR “WE”
            REFERS TO CLOUDSTICK LLC (AS DEFINED BELOW).
          </p>
          <p>
            THIS AGREEMENT CONTAINS PROVISIONS REQUIRING THAT YOU AGREE TO THE
            USE OF ARBITRATION TO RESOLVE ANY DISPUTES ARISING UNDER THIS
            AGREEMENT RATHER THAN A JURY TRIAL OR ANY OTHER COURT PROCEEDINGS
            AND TO WAIVE YOUR PARTICIPATION IN CLASS ACTION OF ANY KIND AGAINST
            CLOUDSTICK.
          </p>
          <p>
            Agreeing to use the Services by creating an account with CloudStick
            using any of the account creation methods constitute your acceptance
            and agreement to be bound by this Agreement, and all other rules,
            policies, and procedures that may be published from time to time by
            us on https://cloudstick.io (the “Website”) and may be modified from
            time to time without notice to you.
          </p>
          <p>
            You acknowledge receipt of our Privacy Policy. If engage with or use
            the Website or Services, you agree to receive any updates to our
            Privacy Policy by accessing the Website. By using our Website or
            Services, you agree that we may use and share your personal
            information in accordance with our Privacy Policy
          </p>
          <p>
            This Agreement applies to all users of the Service. If you are
            entering into this Agreement on behalf of a company, organization,
            or another legal entity (an “Entity”), you are agreeing to this
            Agreement for that Entity and representing to CloudStick that you
            have the authority to bind such Entity to this Agreement, in which
            case the terms “you” or “your” herein will refer to such Entity.
          </p>
          <p>
            CloudStick may modify this Agreement from time to time without prior
            notice to you, provided that if any such alterations constitute a
            material change to this Agreement, CloudStick will provide notice of
            such changes. Modifications shall take effect immediately when
            posted on the Website. By continuing to access or use the Services
            after any such modifications, you agree to be bound by the modified
            Agreement. If you do not agree to any change to this Agreement, then
            you must immediately stop using the Services.
          </p>
          <p>
            You must be at least 13 years of age to use the Service. We may, in
            our sole discretion, refuse to offer the Services to any person or
            entity and change its eligibility criteria at any time
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Access to Services
          </h2>
          <p>
            Subject to your compliance with this Agreement, CloudStick hereby
            grants to you a limited, revocable, non-exclusive, non-transferable,
            and non-sublicensable right to access and use the Services. If you
            are agreeing to this Agreement on behalf of an Entity, such Entity’s
            Affiliates may also access and use the Services provided that such
            Affiliates agree to be bound by the terms of this Agreement, and the
            Entity remain fully liable for such Affiliates’ actions and
            omissions in connection with this Agreement as if the Entity had
            performed such acts and omissions itself. For purposes of this
            Agreement, Affiliate means any entity that, directly or indirectly
            through one or more intermediaries, controls, is controlled by, or
            is under common control with a party.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Restrictions</h2>
          <p>Unless otherwise expressly permitted in writing by CloudStick,</p>
          <p>you will not and you have no right to:</p>
          <ul className="list-disc list-inside">
            <li>
              (a) Interfere with, disrupt, alter, or modify the Services or any
              part thereof, or create an undue burden on the Services or the
              networks or services connected to the Services;
            </li>
            <li>
              (b) Utilize any framing techniques to enclose any CloudStick
              trademark, logo, service mark, or other trade dress (“CloudStick
              Marks”) or Materials (defined below) or use any meta tags or
              other “hidden text” utilizing the CloudStick Marks or Materials
              without CloudStick’s written consent.
            </li>
            <li>
              (c) Use software or automated agents or scripts so as to create
              multiple accounts or to automate interaction with the Services
              other than through CloudStick’s publicly documented API.
            </li>
            <li>
              (d) Cover or obscure any page or part of the Services via
              HTML/CSS, scripting, or any other means.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Free and Trial Services
          </h2>
          <p>
            We may offer free or trial versions of the Services (“Free
            Services”) from time to time. With respect to each such Free
            Service, we will make each such Free Service available to you free
            of charge until the earlier of (a) the end of the free trial period
            (if applicable) for which you registered to use the Free Service;
            (b) the date of Paid Services initiated by you; or (c) termination
            of the Free Service by CloudStick at our sole discretion. We will
            have no liability for any harm or damage arising out of or in
            connection with any Free Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Acceptable Use
          </h2>
          <p>
            Subscribers may not falsely imply any sponsorship or association
            with CloudStick.
          </p>
          <p>
            Subscribers may not engage in any activities or post, transmit,
            store or link to any files, materials, data, text, audio, video,
            images or other content that infringe on any person’s or entity’s
            intellectual property rights, impersonate any person or entity, or
            that are otherwise malicious, injurious, deceptive, or unlawful
          </p>
          <p>
            Subscribers may not use the Services in a manner that would violate
            the lawful privacy rights of any person, or to publish or republish
            defamatory or libelous statements, or to harass or embarrass, which
            shall be determined in CloudStick’s sole and absolute discretion.
            Subscriber may not use the Services to obtain information about or
            make decisions about anyone but themselves. CloudStick reserves the
            sole right to determine whether content or usage meets the
            requirements for acceptable use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Software</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">5.1 License</h3>
          <p>
            CloudStick makes available software in connection with the Services.
            Subject to the terms and conditions of this Agreement, CloudStick
            grants you a limited, revocable, non-exclusive, non-transferable,
            and non-sublicensable (except to Affiliates) license to install and
            use the Software during your use of the applicable Services in
            accordance with this Agreement and any CloudStick documentation
            (“License”). Your License will end upon the earlier of the
            termination of your use of the Services requiring such Software or
            the termination of this Agreement. Some Software may contain open
            source or third party software which may have additional terms and
            restrictions regarding such software’s use.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">5.2 Limitations</h3>
          <p>
            You will not reverse engineer, decompile, disassemble, or otherwise
            attempt to derive the source code, techniques, processes, algorithms,
            know-how or other information from the compressed code or binary
            code portions of the Software (collectively, “Reverse
            Engineering”) or permit or induce the foregoing. If, however,
            directly applicable law prohibits enforcement of the foregoing, you
            may engage in Reverse Engineering solely for purposes of obtaining
            such information as is necessary to achieve interoperability of your
            own or third party software with the Software, and to the limited
            extent permitted by directly applicable law, but only if: (a)
            Reverse Engineering is strictly necessary to obtain such
            information; and (b) you have first requested such information from
            us and we fail to make such information available (for a fee or
            otherwise) under reasonable terms and conditions
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Trade Sanctions and Export Control
          </h2>
          <p>
            You may not use the Service for any reason if you or any party that
            owns or controls you are subject to sanctions or otherwise designated
            on any list of prohibited or restricted parties, including but not
            limited to the lists maintained by the U.S. Government and the
            European Union or its Member States. You may not use the Service to
            export or re-export any information or technology to any country,
            individual, or entity to which such export or re-export is
            restricted or prohibited.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. Responsibilities
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of all
            usernames, passwords, API keys, and other access codes created by or
            assigned to you (“Credentials”) and are solely responsible for all
            activities that occur under such Credentials. You agree to notify
            CloudStick promptly of any actual or suspected unauthorized use of
            any Credentials. CloudStick reserves the right to terminate any
            Credentials that CloudStick reasonably determines may have been
            accessed or used by an unauthorized third party.
          </p>
          <p>
            Subscribers are responsible for the acts of others utilizing their
            access to the Services and will be held responsible for violations
            of the Services by their sub-users or persons who gain access to the
            Services using the Subscriber’s Credentials. Any activity that a
            Subscriber is prohibited from performing by this Agreement is
            equally prohibited to anyone using the Subscriber’s access to the
            Services.
          </p>
          <p>
            Subscribers shall notify all persons who receive access to the
            Services of the provisions of this Agreement and shall inform them
            that the terms of this Agreement are binding upon them.
          </p>
          <p>
            Subscribers shall notify CloudStick if and when they learn of any
            security breaches regarding the Services and shall aid in any
            investigation or legal action that is taken by authorities and/or
            CloudStick to remedy the security breach.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Billing</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            8.1 Recurring Billing
          </h3>
          <p>
            By choosing to use paid Services, you agree to pay us for all
            charges at the prices then in effect for any use of such paid
            Services in accordance with the applicable payment terms. By
            providing a credit card or other means of payment (“Payment
            Method”), you are authorizing us to charge your Payment Method on a
            monthly or annual basis, as otherwise applicable for the
            subscription fees associated with the Paid Services that you sign up
            for, or at any time up to the Subscriber’s current balance. The term
            of this Agreement shall commence on the date that the Subscriber
            signs up for Paid Services. All invoices and payments are in U.S.
            Dollars.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            8.2 Payment Processors
          </h3>
          <p>
            We use third-party payment processors (the “Payment Processors”).
            The processing of payments may be subject to the terms, conditions,
            and privacy policies of the Payment Processors in addition to this
            Agreement. We are not responsible for errors by the Payment
            Processors.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-2">8.3 Price Changes</h3>
          <p>
            We reserve the right to change the subscription fees that we charge
            for the Service, at any time in our sole discretion, provided that
            we give you at least thirty (30) days’ prior notice of such changes.
            Unless otherwise specified in such notice to you, any changes to the
            subscription fees will take effect in the billing period immediately
            following our notice to you
          </p>
          <p>
            We use third-party payment processors (the “Payment Processors”).
            The processing of payments may be subject to the terms, conditions,
            and privacy policies of the Payment Processors in addition to this
            Agreement. We are not responsible for errors by the Payment
            Processors.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. Beta Services
          </h2>
          <p>
            From time to time, we may make early stage or non-production
            Services (“Beta Services”) available to you at no charge. Beta
            Services are intended for evaluation purposes only, and may be
            subject to additional terms that will be presented to you at the
            time of sign-up. CloudStick may, but is not obligated to, provide
            you with support for the Beta Services or correct any bugs, defects,
            or errors in the Beta Services. Unless otherwise stated, any Beta
            Services’ trial period will expire upon the earlier of one year from
            the trial start date or the date that a version of the Beta Services
            becomes generally available without the applicable Beta Services
            designation. We may discontinue Beta Services at any time in our
            sole discretion and may never make them generally available. We will
            have no liability for any harm or damage arising out of or in
            connection with any Beta Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Content</h2>
          <p>
            CloudStick affirms that it will not duplicate, use, or sell your
            personal information or content provided through the Service in any
            manner inconsistent with this Agreement or the Privacy Policy. Your
            content remains your property, and we will handle it in strict
            compliance with applicable privacy laws and policies.
          </p>
          <p>
            You acknowledge receipt of our Privacy Policy. If you engage with or
            use the Website or Services, you agree to receive any updates to our
            Privacy Policy by accessing the Website. By using our Website or
            Services, you agree that we may use and share your personal
            information strictly in accordance with our Privacy Policy.
          </p>
          <p>
            This Agreement applies to all users of the Service. If you are
            entering into this Agreement on behalf of a company, organization,
            or another legal entity (an “Entity”), you are agreeing to this
            Agreement for that Entity and representing to CloudStick that you
            have the authority to bind such Entity to this Agreement, in which
            case the terms “you” or “your” herein will refer to such Entity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Security</h2>
          <p>
            We implement security procedures to help protect your servers and
            data from security threats. However, you understand that your use of
            the Service necessarily involves providing CloudStick access to and
            the ability to modify the contents and operation of your servers and
            that we cannot guarantee that our security procedures will be
            error-free, that your data will always be secure, or that
            unauthorized third parties will never be able to defeat our security
            measures.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            12. Termination, Modification and Discontinuation
          </h2>
          <p>
            You will lose your license to use the Service if you violate any
            provision of this Agreement. Additionally, we may at our sole
            discretion terminate your account or suspend or terminate your
            access to the Service at any time, with or without notice for any
            reason or no reason at all. All fees owed to CloudStick and charges
            accrued before such termination shall be immediately due and
            payable. We reserve the right to modify or discontinue the Service
            at any time (including, without limitation, by limiting or
            discontinuing certain features of the Service) without notice to
            you. We will have no liability whatsoever on account of any change
            to the Service or any suspension or termination of your access to or
            use of the Service. You may terminate your account at any time
            through the Service’s Website or by requesting account termination
            by sending an email support@cloudstick.io.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            13. Proprietary Rights and Ownerships
          </h2>
          <p>
            The visual interfaces, graphics, design, compilation, information,
            data, computer code (including source code or object code),
            products, software, services, and all other elements of the Service
            (the “Materials”) provided by CloudStick are protected by all
            relevant intellectual property and proprietary rights and applicable
            laws. All Materials contained in the Service are the property of
            CloudStick or our third-party licensors. Except as expressly
            authorized by CloudStick you may not make use of the Materials.
            CloudStick reserves all rights to the Materials not granted
            expressly in this Agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">14. Indemnity</h2>
          <p>
            You agree that you will be responsible for your use of the Service,
            and you agree to defend, indemnify, and hold harmless CloudStick and
            its officers, directors, employees, consultants, contractors,
            Affiliates, subsidiaries and agents (collectively, the “CloudStick
            Entities”) from and against any and all claims, liabilities,
            damages, losses, and expenses, including reasonable attorneys’ fees
            and costs, arising out of or in any way connected with (i) your
            access to, use of, or alleged use of the Service; (ii) your
            violation of this Agreement or any representation, warranty, or
            agreements referenced herein, or any applicable law or regulation;
            (iii) your violation of any third-party right, including without
            limitation any intellectual property right, publicity,
            confidentiality, property or privacy right; or (iv) any disputes or
            issues between you and any third party. We reserve the right, at our
            own expense, to assume the exclusive defense and control of any
            matter otherwise subject to indemnification by you (and without
            limiting your indemnification obligations with respect to such
            matter), and in such case, you agree to cooperate with our defense
            of such claim.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            15. Warranty Disclaimer
          </h2>
          <p>
            THE SERVICES ARE MADE AVAILABLE TO YOU ON AN “AS IS” AND “AS
            AVAILABLE” BASIS. AS SUCH, YOUR USE OF THE SERVICES IS AT YOUR OWN
            DISCRETION AND RISK. THE CLOUDSTICK ENTITIES MAKE NO CLAIMS OR
            PROMISES ABOUT THE QUALITY, ACCURACY, OR RELIABILITY OF THE
            SERVICES, ITS SAFETY OR SECURITY, OR THE SERVICES CONTENT.
            ACCORDINGLY, THE CLOUDSTICK ENTITIES ARE NOT LIABLE TO YOU FOR ANY
            LOSS OR DAMAGE THAT MIGHT ARISE, FOR EXAMPLE, FROM THE SERVICE’S
            INOPERABILITY, UNAVAILABILITY, OR SECURITY VULNERABILITIES.
          </p>
          <p>
            THE CLOUDSTICK ENTITIES EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER
            EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
            NON-INFRINGEMENT. SOME JURISDICTIONS MAY PROHIBIT A DISCLAIMER OF
            WARRANTIES AND YOU MAY HAVE OTHER RIGHTS THAT VARY FROM
            JURISDICTION TO JURISDICTION.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            16. Limitation of Liability
          </h2>
          <p>
            IN NO EVENT WILL THE CLOUDSTICK ENTITIES BE LIABLE TO YOU OR ANY
            THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            OR PUNITIVE DAMAGES ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR
            USE OF, OR YOUR INABILITY TO ACCESS OR USE, THE SERVICES OR ANY
            MATERIALS OR CONTENT ON THE SERVICES, WHETHER BASED ON WARRANTY,
            CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL
            THEORY, WHETHER OR NOT THE CLOUDSTICK ENTITIES HAVE BEEN INFORMED
            OF THE POSSIBILITY OF SUCH DAMAGE.
          </p>
          <p>
            SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF
            LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES. ACCORDINGLY, THE
            ABOVE LIMITATION MAY NOT APPLY TO YOU.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            17. Confidentiality
          </h2>
          <p>
            Subscriber shall keep confidential any confidential information to
            which it is given access and shall cooperate with CloudStick’s
            efforts to maintain the confidentiality thereof.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">18. Backup</h2>
          <p>
            Subscriber is solely responsible for the preservation of
            Subscriber’s data which Subscriber saves on their servers (the
            “Data”). EVEN WITH RESPECT TO DATA AS TO WHICH SUBSCRIBER CONTRACTS
            FOR BACKUP SERVICES PROVIDED BY CLOUDSTICK, TO THE EXTENT PERMITTED
            BY APPLICABLE LAW, CLOUDSTICK SHALL HAVE NO RESPONSIBILITY TO
            PRESERVE DATA. CLOUDSTICK SHALL HAVE NO LIABILITY FOR ANY DATA THAT
            MAY BE LOST, OR UNRECOVERABLE, BY REASON OF SUBSCRIBER’S FAILURE TO
            BACKUP ITS DATA OR FOR ANY OTHER REASON.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">19. Publicity</h2>
          <p>
            Each Subscriber is permitted to state publicly that such Subscriber
            is a Subscriber of the Services. Subject to CloudStick’s Privacy
            Policy, each Subscriber agrees that CloudStick may include such
            Subscriber’s name and trademarks in a list of CloudStick
            Subscribers, online or in promotional materials. Each Subscriber also
            agrees that CloudStick may verbally reference such Subscriber as a
            Subscriber of the Services. Subscriber may opt out of the provisions
            in this Section by emailing a request to info@cloudstick.io
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            20. Governing Law
          </h2>
          <p>
            This Agreement will be governed by the laws of the State of Delaware
            without regard to conflict of law principles. To the extent that any
            lawsuit or court proceeding is permitted hereunder, you and
            CloudStick agree to submit to the personal and exclusive
            jurisdiction of the state and federal courts located in Delaware
            for the purpose of litigating all such disputes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            22. Dispute Resolution and Arbitration
          </h2>
          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.1 Use of Arbitration
          </h3>
          <p>
            In the interest of resolving disputes between you and CloudStick in
            the most expedient and cost effective manner, you and CloudStick
            agree that any and all disputes arising in connection with this
            Agreement will be resolved by binding arbitration. Arbitration is
            more informal than a lawsuit in court. Arbitration uses a neutral
            arbitrator instead of a judge or jury, may allow for more limited
            discovery than in court, and can be subject to very limited review
            by courts. Arbitrators can award the same damages and relief that a
            court can award. Our agreement to arbitrate disputes includes, but
            is not limited to all claims arising out of or relating to any
            aspect of this Agreement, whether based in contract, tort, statute,
            fraud, misrepresentation, or any other legal theory, and regardless
            of whether the claims arise during or after the termination of this
            Agreement. YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE
            TERMS, YOU AND CLOUDSTICK ARE EACH WAIVING THE RIGHT TO A TRIAL BY
            JURY OR TO PARTICIPATE IN A CLASS ACTION.
          </p>
          <p>
            Notwithstanding the foregoing, we both agree that nothing herein
            will be deemed to waive, preclude, or otherwise limit either of our
            right to (i) bring an individual action in small claims court, (ii)
            pursue enforcement actions through applicable federal, state, or
            local agencies where such actions are available, (iii) seek
            injunctive relief in a court of law, or (iv) to file suit in a
            court of law to address intellectual property infringement claims.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.2 Arbitrator
          </h3>
          <p>
            Any arbitration between you and CloudStick will be governed by the
            Commercial Arbitration Rules and Mediation Procedures (“AAA
            Rules”) of the American Arbitration Association (“AAA”), as
            modified by this Agreement, and will be administered by the AAA. The
            AAA Rules and filing forms are available online at www.adr.org, by
            calling the AAA at 1-800-778-7879.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.3 Notice and Process
          </h3>
          <p>
            A party who intends to seek arbitration must first send a written
            notice of the dispute to the other by certified mail or, in the
            event that we do not have a physical address on file for you, by
            electronic mail (“Notice”).
          </p>
          <p>
            CloudStick’s address for Notice is: CloudHouse LLC, 30 N, Gould ST
            STER Sheridan, Wyoming – 82801, United States.
          </p>
          <p>
            The Notice must (i) describe the nature and basis of the claim or
            dispute; and (ii) set forth the specific relief sought (“Demand”).
            We agree to use good faith efforts to resolve the claim directly,
            but if we do not reach an agreement to do so within 30 days after
            the Notice is received, you or CloudStick may commence an
            arbitration proceeding.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            2.4 Fees
          </h3>
          <p>
            Any arbitration hearings will take place at a location to be agreed
            upon in the State of Washington provided that if the claim is for
            $10,000 or less, you may choose whether the arbitration will be
            conducted (i) solely on the basis of documents submitted to the
            arbitrator; (ii) through a non-appearance based telephonic hearing;
            or (iii) by an in-person hearing as established by the AAA Rules in
            the county (or parish) of your billing address. If the arbitrator
            finds that either the substance of your claim or the relief sought
            in the Demand is frivolous or brought for an improper purpose (as
            measured by the standards set forth in Federal Rule of Civil
            Procedure 11(b)), then the payment of all fees will be governed by
            the AAA Rules. In such case, you agree to reimburse CloudStick for
            all monies previously disbursed by it that are otherwise your
            obligation to pay under the AAA Rules. Regardless of the manner in
            which the arbitration is conducted, the arbitrator will issue a
            reasoned written decision sufficient to explain the essential
            findings and conclusions on which the decision and award, if any,
            are based. The arbitrator may make rulings and resolve disputes as
            to the payment and reimbursement of fees or expenses at any time
            during the proceeding and upon request from either party made within
            14 days of the arbitrator’s ruling on the merits.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.5 No Class Actions
          </h3>
          <p>
            YOU AND CLOUDSTICK AGREE THAT EACH MAY BRING CLAIMS AGAINST THE
            OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF
            OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
            PROCEEDING. Further, unless both you and CloudStick agree otherwise,
            the arbitrator may not consolidate more than one person’s claims,
            and may not otherwise preside over any form of a representative or
            class proceeding.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.6 Modifications
          </h3>
          <p>
            In the event that CloudStick makes any future change to this
            arbitration provision (other than a change to CloudStick’s address
            for Notice), you may reject any such change by sending us written
            notice within 30 days of the change to CloudStick’s address for
            Notice, in which case your account with CloudStick will be
            immediately terminated and this arbitration provision as in effect
            immediately prior to the amendments you reject will survive.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            22.7 Enforceability
          </h3>
          <p>
            If Subsection 22.1 is found to be unenforceable or if the entirety
            of this Section 22 is found to be unenforceable, then the entirety
            of this Section 22 will be null and void and, in such case, the
            parties agree that the exclusive jurisdiction and venue described in
            Section 20 will govern any action arising out of or related to this
            Agreement
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            23. Consent to Electronic Communications
          </h2>
          <p>
            By using the Service, you consent to receiving certain electronic
            communications from us as further described in our Privacy Policy.
            Please read our Privacy Policy to learn more about your choices
            regarding our electronic communications practices. You agree that any
            notices, agreements, disclosures, or other communications that we
            send to you electronically will satisfy any legal communication
            requirements, including that such communications be in writing.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">24. Contact</h2>
          <p>
            You may contact us or send notices to CloudStick Email:
            info@cloudstick.io or by sending correspondence to:
          </p>
          <p>
            CloudHouse LLC.
            <br />
            30 N, Gould ST STE R Sheridan, Wyoming 82801, United States.
          </p>
        </div>
      </div>
    </div>
    </div>
   
      
    </div>
    <Footer/>
    </>
  );
};

export default TermsOfService;