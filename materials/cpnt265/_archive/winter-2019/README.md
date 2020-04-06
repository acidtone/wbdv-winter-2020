# Project Setup as a Contractor
## DNS Enumeration Audit
  - Do they own their own domain?
    - often the admin/tech/billing contact is registered to the personal email of a past employee. If they aren't responding to renewal reminders, the website and email attached to the domain can go down without warning
  - Who is the domain registrar?
    - Is the conctact information displayed publicly or is it "cloaked" behind the registrar contact info?
  - Who is hosting the DNS records (iow, where are the NS records pointing)?
    - if the registrar is hosting the DNS, then server uptime might be at risk if the web host moves servers around and changes your IP. The web host will send advance notice when this happens so make sure someone is resposible for those emails.
    - if the DNS is hosted by the web host, then web server IP changes are handled automatically by the host.
    - Who's responsible for maintaining the domain's DNS records? If no one at the company is, the client will assume you're responsible for it. 
  - Who's hosting their email? Do the email accounts and data reside on the same server as the website?
    - Who's responsible for maintaining the email server and user accounts? If no one at the company is, the client will assume you're responsible for it. 
    - Do they have SPF records set up? If not, recommend that they do this.

## Project specific questions to ask the client
1. Is this a new or existing project?
2. Does the client have Analytics installed?
    - Get access to the GA
    - Use the Content Drilldown to learn which site content is most popular.
    - What is the Audience
      - What percentage is mobile traffic?
      - What is the browser share?
3. How are you getting paid?
    - time and materials (by the hour; Tony recommends this for beginners)
      - Track time in 15 increments
      - invoice monthly (or every two weeks, if possible)
      - no fixed quotes; be explicit
    - fixed quote with installments
      - avoid if possible
      - weigh the installements so your at least 75% paid by the time the website is ready for launch
    - retainer
      - hard to get until you're more experienced
    - product
4. Where is the site going to be hosted?
    - hosted: i.e. with Media Temple, Hostgator, AWS, Azure, etc
      - make sure there is a good support system in place
    - on-premise: hosted on site with the client
      - only allow this if the client has an IT department (could be one person)
5. Where is the site going to be developed?
    - if the servers are different, when how will the site be migrated?