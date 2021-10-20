import { React, useState, useEffect } from 'react'
import HeaderTemp from '../components/Header/HeaderTemp'
import Footer from '../components/Footer/Footer'
import AOS from 'aos'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/styles'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '1rem',
    margin: '1rem',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
  },
}))

function PrivacyPolicy() {
  const classes = useStyles()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <HeaderTemp />
      </div>
      <div className={classes.container}>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Introduction</h1>
          <ol>
            <li>
              We are committed to safeguarding the privacy of our website
              visitors and service users
            </li>
            <li>
              This policy applies where we are acting as a data controller with
              respect to the personal data of our website visitors and service
              users; in other words, where we determine the purposes and means
              of the processing of that personal data.
            </li>
            <li>
              We use cookies on our website. Insofar as those cookies are not
              strictly necessary for the provision of our website and services,
              we will ask you to consent to our use of cookies when you first
              visit our website.
            </li>
            <li>
              Our website incorporates privacy controls which affect how we will
              process your personal data. By using the privacy controls, you can
              specify whether you would like to receive direct marketing
              communications and limit the publication of your information.
            </li>
            <li>
              In this policy, "we", "us" and "our" refer to CogentHub Pvt. Ltd.
            </li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>What Personal Information We Collect</h1>
          <ul>
            <li>
              <b>Contact information.</b> We might collect your name, email,
              mobile number, phone number, street, city, state, pin code,
              country, IP address, your family member details, educational
              qualification details, medical records, bank information etc.
            </li>
            <li>
              <b>Information you post.</b> We collect information you post in
              our website.
            </li>
            <li>
              <b>Other information.</b> If you use our website, we may collect
              information about your IP address and the browser you're using. We
              might look at what site you came from, duration of time spent on
              our website, pages accessed or what site you visit when you leave
              us. We might also collect the type of mobile device you are using,
              or the version of the operating system your computer or device is
              running.
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>How we collect personal information</h1>
          <p>We collect information in different ways:</p>
          <ol>
            <li>We collect information directly from you.</li>
            <li>
              We collect information when you provide your details in our
              website.
            </li>
            <li>
              We get information about you from third parties. For example,
              recruitment agencies, business partners etc. The third-party
              social media site will give us certain information about you. This
              could include your name, email address, contact number, location
              etc.
            </li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>How we use your personal data</h1>
          <ol>
            <li>
              In this Section 3 we have set out:
              <ul>
                <li>
                  the general categories of personal data that we may process
                </li>
                <li>
                  in the case of personal data that we did not obtain directly
                  from you, the source and specific categories of that data
                </li>
                <li>the purposes for which we may process personal data</li>
                <li>the legal bases of the processing</li>
              </ul>
            </li>
            <li>
              We may process data about your use of our website and services
              ("usage data"). The usage data may include your IP address,
              geographical location, browser type and version, operating system,
              referral source, length of visit, page views and website
              navigation paths, as well as information about the timing,
              frequency and pattern of your service use. The source of the usage
              data is our analytics tracking system. This usage data may be
              processed for the purposes of analysing the use of the website and
              services. The legal basis for this processing is consent OR our
              legitimate interests, namely monitoring and improving our website
              and services.
            </li>
            <li>
              We may process your personal data for our internal purposes
              (“personal data”). The usage of your data may include your name,
              email address, contact number, address, educational qualification,
              medical details, family member details, bank account details etc.
              The source of the personal data is you. The personal data may be
              processed for future reference of any job posting, background
              verification, medical insurance, performance evaluation, pension
              benefit etc. The legal basis for this processing is consent.
            </li>
            <li>
              We may process your information included in your personal profile
              on our website ("profile data").The profile data may include your
              name, address, telephone number, email address, gender, date of
              birth. The profile data may be processed for the purposes of
              enabling and monitoring your use of our website and services. The
              legal basis for this processing is consent OR our legitimate
              interests, namely the proper administration of our website and
              business OR the performance of a contract between you and us
              and/or taking steps, at you request, to enter into such a
              contract.
            </li>
            <li>
              We may process information contained in any enquiry you submit to
              us regarding services ("enquiry data"). The enquiry data may be
              processed for the purposes of offering, marketing and selling
              relevant goods and/or services to you. The legal basis for this
              processing is consent.
            </li>
            <li>
              We may process information contained in or relating to any
              communication that you send to us ("correspondence data"). The
              correspondence data may include the communication content and
              metadata associated with the communication. Our website will
              generate the metadata associated with communications made using
              the website contact forms. The correspondence data may be
              processed for the purposes of communicating with you and
              record-keeping. The legal basis for this processing is our
              legitimate interests, namely the proper administration of our
              website and business and communications with users.
            </li>
            <li>
              We may process any of your personal data identified in this policy
              where necessary for the establishment, exercise or defence of
              legal claims, whether in court proceedings or in an administrative
              or out-of-court procedure. The legal basis for this processing is
              our legitimate interests, namely the protection and assertion of
              our legal rights, your legal rights and the legal rights of
              others.
            </li>
            <li>
              In addition to the specific purposes for which we may process your
              personal data set out in this Section 3, we may also process any
              of your personal data where such processing is necessary for
              compliance with a legal obligation to which we are subject, or in
              order to protect your vital interests or the vital interests of
              another natural person.
            </li>
            <li>
              Please do not supply any other person's personal data to us,
              unless we prompt you to do so.
            </li>
            <li>We use information as otherwise permitted by law.</li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Sharing of your information to third parties</h1>
          <ul>
            <li>
              <b>
                We will share information with third parties who perform
                services on our behalf.
              </b>{' '}
              We share information with vendors who help us to manage our
              website, services. Some vendors may be located outside of India.
            </li>
            <li>
              <b>We will share information with our business partners.</b> This
              includes a third party who provide or sponsor an event, or who
              operates a venue where we hold events. Our partners use the
              information we give them as described in their privacy policies.
            </li>
            <li>
              <b>
                We may share information if we think we have to in order to
                comply with the law or to protect ourselves.
              </b>
              We will share information to respond to a court order or subpoena.
              We may also share it if a government agency or investigatory body
              requests. Or, we might also share information when we are
              investigating potential fraud.
            </li>
            <li>
              <b>
                We may share information with any successor to all or part of
                our business.
              </b>{' '}
              For example, if part of our business is sold we may give our
              customer list as part of that transaction.
            </li>
            <li>
              <b>
                We may share your information for reasons not described in this
                policy.
              </b>{' '}
              We will tell you before we do this.
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Retaining and deleting personal data</h1>
          <ol>
            <li>
              This Section sets out our data retention policies and procedure,
              which are designed to help ensure that we comply with our legal
              obligations in relation to the retention and deletion of personal
              data.
            </li>
            <li>
              Personal data that we process for any purpose or purposes shall
              not be kept for longer than is necessary for that purpose or those
              purposes.
            </li>
            <li>
              We will retain your personal data as follows: a. [Personal data
              category or categories] will be retained for a minimum period of
              [2 Years] following [14-01-2023], and for a maximum period of [5
              Years] following [14-01-2026].
            </li>
            <li>
              In some cases it is not possible for us to specify in advance the
              periods for which your personal data will be retained. In such
              cases, we will determine the period of retention based on the
              following criteria: The period of retention of personal data
              category will be determined based on business requirement.
            </li>
            <li>
              Notwithstanding the other provisions of this Section 6, we may
              retain your personal data where such retention is necessary for
              compliance with a legal obligation to which we are subject, or in
              order to protect your vital interests or the vital interests of
              another natural person.
            </li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>About cookies</h1>
          <p>
            A cookie is a file containing an identifier (a string of letters and
            numbers) that is sent by a web server to a web browser and is stored
            by the browser. The identifier is then sent back to the server each
            time the browser requests a page from the server.
          </p>
          <p>
            Cookies may be either "persistent" cookies or "session" cookies: a
            persistent cookie will be stored by a web browser and will remain
            valid until its set expiry date, unless deleted by the user before
            the expiry date; a session cookie, on the other hand, will expire at
            the end of the user session, when the web browser is closed.
          </p>
          <p>
            Cookies do not typically contain any information that personally
            identifies a user, but personal information that we store about you
            may be linked to the information stored in and obtained from
            cookies.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Cookies that we use</h1>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>
              Authentication - we use cookies to identify you when you visit our
              website and as you navigate our website
            </li>
            <li>
              Status - we use cookies to help us to determine if you are logged
              into our website
            </li>
            <li>
              Personalisation - we use cookies to store information about your
              preferences and to personalise the website for you
            </li>
            <li>
              Security - we use cookies as an element of the security measures
              used to protect user accounts, including preventing fraudulent use
              of login credentials, and to protect our website and services
              generally
            </li>
            <li>
              Advertising - we use cookies to help us to display advertisements
              that will be relevant to you
            </li>
            <li>
              Analysis - we use cookies to help us to analyse the use and
              performance of our website and services
            </li>
            <li>
              Cookie consent - we use cookies to store your preferences in
              relation to the use of cookies more generally
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Cookies used by our service providers</h1>
          <p>
            Our service providers use cookies and those cookies may be stored on
            your computer when you visit our website.
          </p>
          <p>
            We use Google Analytics to analyse the use of our website. Google
            Analytics gathers information about website use by means of cookies.
            The information gathered relating to our website is used to create
            reports about the use of our website. Google's privacy policy is
            available at:{' '}
            <a href="https://www.google.com/policies/privacy/">
              https://www.google.com/policies/privacy/.
            </a>
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Our details</h1>
          <p>This website is owned and operated by CogentHub Pvt. Ltd.</p>
          <p>
            We are registered in India under registration number CIN
            U74999WB2016PTC217333, and our registered office is at Martin Burn
            Business Park, Plot 3, Block BP, Sector V, Kolkata, West Bengal,
            Kolkata 700091, India.
          </p>
          <p>
            Our principal place of business is at Martin Burn Business Park,
            Plot 3, Block BP, Sector V, Kolkata, West Bengal, Kolkata 700091,
            India.
          </p>
          <p>You can contact us: By post, to the postal address given above:</p>
          <ol>
            <li>Using our website contact form</li>
            <li>
              By telephone, on the contact number published on our website from
              time to time
            </li>
            <li>
              By email, using the email address published on our website from
              time to time
            </li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Data Privacy Officer</h1>
          <p>Our data privacy officer's contact detail:</p>
          <p>
            <b>Name:</b> Harbinder Singh
          </p>
          <p>
            <b>Mobile:</b> +91- 8777548475
          </p>
          <p>
            <b>Landline:</b> +91-33-66426642
          </p>
          <p>
            <b>Email:</b> harbinder@cogenthub.com
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Amendments</h1>
          <ol>
            <li>
              We may update this policy from time to time by publishing a new
              version.
            </li>
            <li>
              You should check this page occasionally to ensure you are happy
              with any changes to this policy.
            </li>
            <li>
              We may OR will notify you of changes OR significant changes to
              this policy by email or through the private messaging system.
            </li>
          </ol>
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1>Jurisdiction</h1>
          <p>
            If you choose to visit the website, your visit and any dispute over
            privacy is subject to this Policy and the website's terms of use. In
            addition to the foregoing, any disputes arising under this Policy
            shall be governed by the laws of India.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PrivacyPolicy
