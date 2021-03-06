import React from 'react';

function AboutPage() {
    return (
        <div>
            <main>
                <div className="aboutContainer">
                    <div className="bodytext">
                        <div className="problem-domain">
                            <section>
                                <h2>Problem Domain</h2>
                                <p>Due to the COVID-19 pandemic, <a
                                    href="https://www.governor.wa.gov/news-media/inslee-announces-stay-home-stay-healthy%C2%A0order">Jay
                                        Inslee issued a stay-at-home order</a> on March 23rd,
                                    2020 that restricted Washington residents for a minimum of two weeks. After almost
                                    a year of most businesses being shut down or restricted, residents are getting restless
                                    trying to entertain themselves. The impact of social isolation and a sedentary lifestyle
                                    is having a detrimental effect on physical and mental health, so our app aims to suggest
                                    fun, active, and safe activities around the Washington and PNW region.</p>
                                <p>The ways that people have been finding activities to do during the COVID-19 pandemic have
                                been somewhat random or based on trending activities. Current resources available are more
                                general and not customized to users’ needs. There is demand for a resource that would allow
                                users to intentionally filter activities that meet their needs, fit within their personal
                                    limits, and use their time most effectively.</p>
                                <p>While there are websites or blogs that suggest social-distanced activities that are safe,
                                    most of the suggested activities are very generic (eg. <a
                                        href="https://www.mayoclinic.org/diseases-conditions/coronavirus/in-depth/safe-activities-during-covid19/art-20489385">attend
                                        virtual fitness classNamees</a>,
                                    <a href="https://blog.wa.aaa.com/travel/travel-tips/things-to-do-while-social-distancing/">go
                                        on a hike</a>)
                                    and we wanted to provide a web app that suggests personable and creative activity ideas.
                                    What our
                                    web application aims to do is take in data from the user on which activities they have
                                    personally done.
                                    They would rate and tag each activity and suggest based on personal preferences and the
                                    ratings of the
                                    activities they have done already. Additionally, with so much information available online,
                                    it’s easy
                                    for people to lose track, so our app allows them to make folders to hold all their favorite
                                    ideas.
                                </p>
                            </section>
                        </div>


                        <div className="app-description">
                            <section>
                                <h2>App Description</h2>
                                <p>The primary users of this application will be people who live in Washington ages 18-40.
                                People in this
                                demographic are more likely to have the autonomy to explore activities they are interested
                                in. They
                                also are not a high-risk age group, which allows for more freedom in the activities they
                                participate in.
                                Additionally, parents are looking for fun activities to entertain their kids, since most are
                                doing school online.
                                Overall, this app can be used by young to middle-aged people who are looking for interesting
                                    activities that are safe in Washington.</p>
                                <p>Users will be viewing textual descriptions of potential activities to do that are safe. Each
                                activity
                                would be accompanied by ratings and tags that would help users search and filter activities
                                that meet their needs.
                                To start, our web app will provide some suggestions for Washington hikes and safe
                                activities.
                                Users can search for and sort ideas that interest them into folders for later reference.
                                Over time, our users can contribute their own ideas, experiences, ratings, and comments to
                                the platform.
                                This app can help Washington residents to stay healthy and entertained during the lockdown,
                                by allowing them to sort for interesting activities and hear about the experiences of
                                others. Even after the pandemic passes, this will still be a useful resource for residents
                                    and tourists alike.</p>
                                <p>Note: the app content will primarily be added by the creators, while users still have the
                                ability to vote/like the activities. There will not be a forum-style comment area due to
                                    difficulties with moderation.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export { AboutPage };