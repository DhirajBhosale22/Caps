// // import React, { useState, useRef, useEffect } from 'react';
// // import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// // import { useNavigation } from '@react-navigation/native';

// // interface Item {
// //   title: string;
// //   explanation: React.ReactNode;
// //   expanded: boolean;
// // }

// // const IntroductionPage: React.FC = () => {
// // //   const navigation = useNavigation();
// //   const [items, setItems] = useState<Item[]>([
// //     {
// //       title: ( <Text>
// //         <Text  style={{ fontSize: 20 }}>Introduction</Text>{"\n"}
// //         <Text style={styles.titleSub}>The Critical Aggression Prevention System (CAPS) in the palm of your hand.</Text>
// //       </Text>), explanation: (  <Text style={styles.info}>I'm John D. Byrnes, D.Hum.,
// //          Founder and CEO of the Center for Aggression Management and a Principal in the development of
// //         the CAPS Mobile App. This CAPS Mobile App is our Critical Aggression Prevention System (CAPS) 
// //         in the palm of your hands! CAPS uses scientifically-validated (face validity) indicators of
// //         emerging aggression and produces evidence-based results. Without "evidence-based" results
// //         how do you know what is true and what is false, or what is working and what is not working.
// //         To learn more about our CAPS system watch our <Text style={styles.link}
// //         onPress={() =>Linking.openURL('https://www.aggressionmanagement.com/pdf/References%20and%20Citations%20CAPS%20Mobile%20App.pdf')}>
// //             CAPS Instructional Video. </Text>
// //       {'\n\n'} <Text style={styles.info}>I am here to introduce you to the CAPS Mobile App, the Center for Aggression Management's Critical
// //       Aggression Prevention System (CAPS), its Meter of Emerging Aggression, and recommended Responses.
// //       As you read the concepts below you can identify areas of interest and focus on them specifically;
// //       however, to better understand and respond with the Critical Aggression Prevention System (CAPS),
// //       we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, 
// //       either Certified Aggression Managers or Ambassadors' 
// //       (train-the- trainers) Webinar-based Workshops. This knowledge is designed to offer operational 
// //       capability and to do so, it requires an overarching knowledge of this content. Throughout this writing, 
// //       I will reference "studies show," and "scientific validation," for <Text style={styles.link}
// //         onPress={() =>Linking.openURL
// //         ('https://www.aggressionmanagement.com/pdf/References%20and%20Citations%20CAPS%20Mobile%20App.pdf')}>
// //            references and citations </Text> 
// //        follow this link:
// //       </Text>
      
// //       {'\n\n'}Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager, thereby making you and those in your care "as safe as possible" the highest form of evidence- based Best Practices! In our Webinar- based Introduction to the CAPS Mobile App Workshops, we offer practical operational knowledge. However, we are just scratching the surface of Aggression Management. It is our hope that you may eventually wish to become more proficient as a Certified Aggression Manager or become one of our Ambassadors (Certified Trainers).
// //       {'\n\n'}Like a pace car at the Dayton 500, pacing the aggressor represents the skills of coming along side of,
// //        or mirroring, individuals that encourages rapport and trust.
// //         Elements required to convince an emerging aggressor away from their potential path to violence. 
// //         We can track mounting anxiety from the Trigger Phase through the Escalation Phase into the Crisis 
// //         Phase of the Primal Aggression Continuum. Further, we can track the transition from assertive behavior
// //          to aggressive behavior, through covert disconnection, to increasing overt aggressive actions
// //         taken with the intent to harm displayed within the Cognitive Aggression Continuum. Using the
// //         Judicious Interview, and considering the "Totality of the Circumstances,"
// //         we can affirm our objective observables by identifying an aggressor's intent to harm,
// //         and at what level, or stage, on the Cognitive Aggression Continuum (our secret sauce) this aggressor
// //         resides. We can now weigh whether this aggressor is more a Primal (adrenaline-driven) Aggressor or 
// //         Cognitive (intent-driven) Aggressor, and this permits us the more a Primal (adrenaline-driven) 
// //         Aggressor or Cognitive (intent-driven) Aggressor, and this permits us the opportunity to apply
// //         recommended corresponding skill sets to maximize our defusing and preventing results; thus, avoiding
// //         any accusation of excessive force.
// //       {'\n\n'}If you are confronted with an aggressor, your challenge will be to prevent any further escalation, persuading this aggressor away from his destructive (aggressive) path to a more constructive (assertive) path. By using methods described by the FBI and US Secret Service to identify this "aggressive" path, we can reliably prevent bullying, conflict, harassment, abuse, discrimination, and violence. Although I don't discount the wrath of an aggressive female, throughout this CAPS Mobile App, with no apologies, I characterize the aggressor as male. That is because many statistics show that up to 90% of all aggressors are men.
// //       {'\n\n'} <Text style={styles.link} onPress={() => Linking.openURL('https://www.example.com/caps-details')}>click here</Text>
// //       </Text>), expanded: false
// //     },
// //     {  title: ( <Text>
// //       <Text  style={{ fontSize: 20 }}>CONCEPT ONE</Text>{"\n"}
// //       <Text style={styles.titleSub}>Using the CAPS Mobile App</Text>
// //     </Text>), explanation: (  <Text style={styles.info}>
// //     Smartphones have limited space for explanations; therefore, we will place only essential insights in the phone's Mobile App and offer expanded explanations in our Webinar-based Workshops. We strongly recommend that when you first open your CAPS Mobile App, you start at the beginning and read its content, in its entirety, from its Introduction to the CAPS Meter of Emerging Aggression (MEA) through each of the concepts. As you progress within the CAPS Mobile App's Stages of Aggression, it is presumed that you have read and understand content in its entirety. If you feel that you need to know more, we recommend that you take one or more of our CAPS Webinar Workshops.
// //     {'\n\n'}In the lower Stages of Aggression, where the threat level is "Low" and there is more available time, we suggest that you refer to the recommended responses offered in this app more detail. When the Threat Level is "High," first consider calling 911 and we will offer more details within your phone's Mobile App. Remember, if aggression occurs within your company use the CAPS Mobile App to help you, but always follow your Company's internal policies and procedures.
// //     {'\n\n'}Our scientifically validated Critical Aggression Prevention System's (CAPS) Meter of Emerging Aggression (MEA) indicates the Stages of Aggression and is at the cutting edge of science; whereas, Best Practice responses are more an art than science. It is our objective to offer Best Practice responses that correlate with each stage of aggression predicted in the Meter of Emerging Aggression (MEA) but remember that you must always use your professional judgment as to what to do and when. The greater your understanding of these Best Practice Responses, the more skills you will have to exercise at your own discretion and professional judgment.
// //     {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// //    </Text>), expanded: false },

// //     {   title: ( <Text>
// //       <Text  style={{ fontSize: 20 }}>CONCEPT TWO</Text>{"\n"}
// //       <Text style={styles.titleSub}>Are you an Aggression Manger?</Text>
// //     </Text>), explanation: (  <Text style={styles.info}>Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager (and at some point in the future, become a Certified Aggression Manager), thereby making you and those in your care "as safe as possible," the highest form of Evidence- based Best Practices!</Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT THREE</Text>{"\n"}
// //   <Text style={styles.titleSub}>Critical Aggression Prevention System(CAPS)</Text>
// // </Text>), explanation: (  <Text style={styles.info}>When it comes to workplace and/or school safety, nothing is more important than a threat assessment program. That's why, as an organization or institution, you probably have a meticulously designed program that engages people to report strange behaviors (If you see something, say something). The issue with this approach is that you're left overwhelmed with subjective references that are difficult to evaluate. But you have a responsibility to follow up, so the question becomes, how do you tell who's a real threat and who's simply acting strange?
// // {'\n\n'}Profiling is one of the go-to practices, but studies have shown and news reports of workplace tragedies - prove that profiling doesn't work. Without a clear-cut method going forward, you end up over-reacting or worse, under-reacting. So how do you find a better method; an objective scientifically validated method that proactively detects emerging aggression (someone on the path to violence)? Enabling you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor? For a program based on prevention and effective mitigation, instead of responding and reaction?
// // {'\n\n'}There is a better method and it's called CAPS from the Center for Aggression Management. CAPS, or the Critical Aggression Prevention System, is the first and only scientifically validated "system" with three critical attributes empowering you to make your workplace as safe as possible, the highest form of Evidence- based Best Practices! Based on 23 years of research into aggressive behavior, CAPS relies on the measurement of emerging aggression, instead of focusing on mental health issues or ineffective, and often illegal, profiling. CAPS enables you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking  <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },


// // {title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT FOUR</Text>{"\n"}
// //   <Text style={styles.titleSub}>The Primal and Cognitive Aggression Continua, the Basis for the MEA</Text>
// // </Text>), explanation: (  <Text style={styles.info}><Text style={{ fontWeight: 'bold'}}>1. Primal Aggression Continuum</Text>{'\n'}

// // The Primal Aggression Continuum utilizes forces that are physiological (chemical and neurological) actions the body takes to preserve and protect itself (Natural Responses). The civility with which we treat one another in our day-to-day dealings is a veneer that masks those forces until we feel endangered or threatened, either physically, emotionally, intellectually (professionally) or spiritually. Then that most primal of human chemicals, adrenaline, kicks in naturally in mind and triggering the "fight or body, flight" mode/response. Initially these modes/responses are more subtle but grow in dynamics and influence as a potential aggressor progresses up this Aggression Continuum. It is important to note that often in the lower stages of the Primal Aggression Continuum, emerging aggression to the untrained eye is unseen. It is incumbent upon us to identify this early emerging aggression because aggression is easiest to diffuse in its earlier stages. As an aggressor approaches the Crisis Phase, Primal Aggression is usually described as an individual losing control and in the extreme what I like to call the "Red Faced Ready to Explode Guy;" whereas Cognitive Aggression is usually the aggression of a victimizer, predator and/or ultimately a terrorist (perpetrator of murder/suicide) who shows very little emotion or the effects of adrenaline.
// // {'\n\n'}<Text style={{fontWeight:'bold'}}>2.Cognitive Aggression Continuum</Text>{'\n'}Unlike primal aggression reactions, which are natural responses in the mind and body, the Cognitive Aggression Continuum describes deliberate and conscious behavior, usually manipulative in nature, to enable the aggressor to achieve and maintain an advantage over "victims" and over any individual who intervenes. Sometimes Cognitive Aggression can be non- conscious. Example: conscious behavior as a child becomes non- conscious behavior as an adult an individual repeats aggressive behavior so often that he no longer gives it much thought. This aggressive behavior becomes a habit and he becomes known as a vicious person.
// // {'\n\n'}Cognitive Aggression, often well planned and always insidious, is a far greater intellectual challenge for the Aggression Manager. Cognitive Aggressive behavior progresses through nine stages, which encompass the complete spectrum
// // of human intent-driven aggression.It has become clear that as an individual's aggression escalates,
// // their quality of judgment
// // diminishes. There can be a
// // progression of intent to harm that
// // occurs in the initial stages almost
// // unnoticed, even by the aggressor.
// // An individual who does not see
// // himself as "aggressive" but is
// // inconsiderate and/or patently
// // distrustful of others, become more
// // aggressive toward an individual(s)
// // as he escalates. Like the analysis of
// // the "Boiling Frog," without realizing
// // it, this aggressor progressively
// // becomes more aggressive to the
// // point where he is prepared to give
// // up his life for a cause sometimes
// // without realizing how very
// // aggressive he has become. When an individual moves away from a win/win solution and begins to harden his position on his issue versus your issues, he is beginning on a path of definable Cognitive Aggression. This course could ultimately result in "plunging together into the abyss," a culmination of violence to you, those in your care and even to the aggressor himself (Perpetrator of Murder/Suicide).
// // {'\n\n'}Cognitive Aggressors are typically
// // far more premeditated, deliberate and determined in their actions; making them potentially the most lethal of all aggressors! Perpetrators of Murder/Suicide (Terrorists), whether executed by a surrogate for ISIS, a worker returning to his workplace targeting supervisors, a love interest or fellow workers and then himself, or by a young man on his classmates and then himself, can transcend through the Cognitive Aggression Continuum and not yet perpetrate physical violence. Either his victim(s) is not yet available to him or he has not yet positioned his victim(s) for attack, however the indicators are present and can be identified. Murder/suicide events are on the rise. Often only noticed on local news, many events are not discussed on a national level, and many of us are often surprised to hear of such an event in our workplaces or neighborhoods.Learn more at our Educational Website, look for "The Primal and Cognitive Aggression Continua, the Basis for the MEA"
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT FIVE</Text>{"\n"}
// //   <Text style={styles.titleSub}>The Judious Interview</Text>
// // </Text>), explanation: (  <Text style={styles.info}>Because we are assessing humans, even objective measurable observables of body language, behavior and communication indicators, in themselves, are not always absolute. Thus, we developed the Judicious Interview! Once we have identified an aggressor on the Meter of Emerging Aggression, the goal of the Judicious Interview is to use Scientific Cause and Effect Principals to affirm whether this aggressor is a "person of interest." We accomplish this by asking specific questions or taking specific actions that produces a predicable response illustrating hostile or malicious intent.
// //   {'\n\n'}Unlike therapy, the initial goal of the Judicious Interview is not about forming a connection with the aggressor but to identify an aggressor and diffuse/prevent any aggressive act. Once an aggressor has been identified, building rapport and trust may be useful and applied to persuade the aggressor away from their path of violence, while they begin to regain their quality of judgment. The purpose of the Judicious Interview is to better understand the level of aggression and identify their mission or target and begin a diffusing/preventing process.
// //   {'\n\n'}Consider ways to get to the central question of intent, "Help me understand the intent behind your behavior." Or "Help me understand the intent meant by what you said?" Although we recommend that you ask directly about "intent," you may also put this in your own words such as, "What are you trying to accomplish by what you are doing?" or "Help me understand where your behavior and comments are heading?"
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT SIX</Text>{"\n"}
// //   <Text style={styles.titleSub}>SolutionPerson</Text>
// // </Text>), explanation: (  <Text style={styles.info}>If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to the men and women, as "SolutionPerson." Be SolutionPerson!
// // {'\n\n'}In my many seminars around the country, I tell the story of a top business executive I knew years ago. I asked him once what accounted for his success in dealing with so many challenges day after day. He smiled and told me that if he were to open his shirt, I would see a big red "S" on his chest, and it stood for "Solutionman!" His philosophy was to seek solutions, whatever that took not assign blame, nor take sides, nor make excuses, nor sit around complaining, but to solve problems. He refused to allow himself to become part of the problem, but only permitted himself to be part of the solution. He repeated the old saying that has very special meaning with Aggression Managers, "If you're not part of the solution, you are probably part of the problem."
// // {'\n\n'}I've thought about that over the years, and adopted his philosophy in my own career. Part of gaining trust is being perceived as one who seeks solutions. If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to men and women, as "SolutionPerson."
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT SEVEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>The Art Of Convincing</Text>
// // </Text>), explanation: (  <Text style={styles.info}>The Art of Convincing is getting someone to agree with you, because they believe it is good for them, preferably without them thinking it was your idea. The use of Pacing the Aggressor strategies with verbal and non-verbal techniques, and the effective use and reading of body language, all can lead to this result.
// // {'\n\n'}Are you sharing your opinion, or are you attempting to change behavior? Using a Socratic method, you can convince this aggressor away from his aggression, and if possible, have him think it was his idea. The Socratic Method is achieved through questions. Socrates asked questions that guided his subject to the answer he wished them to hear and learn. Through this method, he could convince his subject of his lesson and often his subject would think it was their idea.
// // {'\n\n'}Persuasion is not necessarily a gentle art, although it is best practiced as such at the outset of an aggressive incident. Many aggressors can indeed be artfully nudged out of their aggressive intent, while some require stronger persuasion. I like to characterize persuasion as "coming alongside" an aggressor, and then, using numerous persuasive Pacing the Aggressor skills, induce this individual to think your way while he is buying into the notion that it was his own idea. We will venture to share these techniques with you throughout this CAPS Education Website, and we will reference them in the CAPS Mobile App.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },


// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT EIGHT</Text>{"\n"}
// //   <Text style={styles.titleSub}>Scientifically-Reliable: Meter of Emerging Aggression (MEA)</Text>
// // </Text>), explanation: (  <Text style={styles.info}>The Meter of Emerging Aggression (MEA) is scientifically-reliable and thus it offers evidence-based Best Practices, and the opportunity to reliably prevent all forms of aggression from their outset through and including the most lethal form of violence, someone on the path to becoming a perpetrator of murder/suicide. Because our MEA represents the sequential precursors to each stage of aggressive behavior, it offers the opportunity to reliably prevent escalation of aggression, ultimately preventing violence.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT NINE</Text>{"\n"}
// //   <Text style={styles.titleSub}>Taking Responsibility for Yours Actions </Text>
// // </Text>), explanation: (  <Text style={styles.info}>As an Aggression Manager you must be able to say that you acted judiciously and to the best of your ability, under difficult circumstances, to diffuse this aggressor- and that you take full responsibility for your actions. No matter who initiated the aggressive behavior, you will be held responsible for your actions. You may only use "reasonable force" within an aggression moment. The problem is, what "reasonable force" is may ultimately be determined in a court of law, not in the aggression moment itself. It is our objective to provide you with the knowledge and skills, along with your professional judgment, to help make you, and those in your care, as safe as possible.
// // {'\n\n'}Be your own best advocate.
// // {'\n\n'}You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise.
// // {'\n\n'}We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
// // {'\n\n'}The CAPS responses are excellent templates to be used based upon your professional judgment, your understanding of this Emerging Aggressor, and the circumstances that you are in. Although we have found these responses extremely effective, we can make no warrants as to your effectiveness with a particular Emerging Aggressor. Only you know this individual and the circumstance that you are in, so you must use your professional judgment in applying any and all of these suggested template Best Practice 
// // responses.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT TEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Be your own best advocate</Text>
// // </Text>), explanation: (  <Text style={styles.info}>You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise. We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT ELEVEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Four Key Elements in each Stage of Aggression</Text>
// // </Text>), explanation: (  <Text style={styles.info}>
// //   <Text style={{fontWeight:'bold'}}>Aggression Stage Introduction</Text>
// //   {'\n'}This is an introduction to each stage of aggression, which further describes and affirms your observations, plus three important perspectives:
// //   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective One (What if you are the aggressor?)</Text>
// //   {'\n'}How should you respond if you are the aggressor? You may not think of yourself as an aggressor, you may be inadvertently responding to another's aggression. If you find yourself on this Meter of Emerging Aggression (MEA), what should you do? These insights may help you remove yourself from further escalation.
// //   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Two (What if you are observing an aggressor?)</Text>
// //   {'\n'}How should you respond if you are observing an aggressor(s)? You will learn the insights and knowledge you can best use to diffuse the emerging aggressor, and prevent further escalation?
// //   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Three (What is the role of "trust?")</Text>
// //   {'\n'}How should you respond recognizing our "CAPS Trust Tenet:" If someone trusts us 100%, upon your request, they will move away from their aggression because they trust us 100%! In Perspective Three you will learn the importance of understanding the element of "trust" and its implications. Aggressive behavior undermines "trust!"
// //   {'\n\n'}Let's say you are the manager of a department that includes one hundred individuals, including supervisors and employees. How many of those individuals would you suspect to be loyal to you and your organization? 34! How many of those individuals would you estimate are headed out the door? 36!
// //   {'\n\n'}These findings from the Walker Loyalty Report for Loyalty in the Workplace states "just 34% of employees are staying while another 36% are about to walk. That leaves 30% who either haven't made up their minds or are just going with the flow". This Walker Report assesses loyalty five ways. Of these five elements, the single most important is "trust." Walker informs us that, "Trust, as the core culprit, is an operative driver." Realizing that, according to Walker, "only one third of the individuals are with you, therefore two-thirds are either on the fence or going against you;" if you wish to boost loyalty, leadership, teamwork and thus productivity then focusing on trust may be the leverage point, but until now it has been the most difficult to measure. With the Meter of Emerging Aggression, we can identify distrustful (aggressive) behavior and prevent it.
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT TWELEVE</Text>{"\n"}
// //   <Text style={styles.titleSub}>Every behavior begins with a thought</Text>
// // </Text>), explanation: (  <Text style={styles.info}>We can plant a constructive thought through visualization. Military, law enforcement and professional athletes use visualization often as an effective tool. They call it developing a "conditioned response." The notion that the mind serves as a kind of gatekeeper for emotional or aggressive' behavior is at the core of the cognitive theory of emotions. This cognitive appraisal activity is typically rapid. The question is, will these initial cognitive thoughts be a constructive or destructive thoughts? In the "Aggression Environment" they can quickly become negative and destructive! We can, and must, use visualization to plant constructive thoughts!
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT THIRTEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Surviving the</Text>
// // </Text>), explanation: (  <Text style={styles.info}>The chances that you will find yourself face-to-face with an Active Shooter are quite slim, however, in our increasingly aggressive world should this occur, here are some important facts.
// //   {'\n\n'}The Moment of Commitment is "When a person decides to pull his weapon and begin shooting." According to Gavin deBecker in his book "Just 2 Seconds," the time between the Moment of Commitment and when the first round is discharged is just 2-seconds!
// //   {'\n\n'}Within the next horrific five seconds there will be victims: dead, dying and/or wounded! There are virtually no security or law enforcement teams that will reliably arrive within these first horrific five seconds. Regardless of how well trained, or equipped, security or law enforcement may be, they will arrive on scene stepping over those slain during those horrific first 5 seconds!
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// //   </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT FOURTEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Controlling Your Adrenaline Rush with Cycle Breathing</Text>
// // </Text>), explanation: (  <Text style={styles.info}>Cycle Breathing is a method effectively in dire circumstances by the US Navy Seals. You consciously breathe in deeply through your nose, counting to four, hold to the count of two, exhale out through your mouth to the count of four and hold to the count of two. Again. And again. Practice Cycle Breathing as you drive into work, or as you return home, or as you put your head on the pillow at night. The worst place to practice Cycle Breathing is in front of an aggressor. Make Cycle Breathing yours, so that when you need it, it's available to you. You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me - this works!
// //   {'\n\n'}Adrenaline in one adversary, i.e. "Emerging Aggressor," activates the adrenaline in you, preparing you for attack. Adrenaline is released into your bloodstream. Your heart accelerates, you feel perspiration, and your breathing patterns change. As adrenaline increases your heart rate, you begin to lose your ability to think creatively, innovatively and thoughtfully. Cycle Breathing begins to pay off. It relaxes your body, increases blood flow and essential oxygen to your brain, and counteracts the effects of adrenaline that cloud your own logical thinking.
// //   {'\n\n'}Per Redford Williams (1989) General Adaptation Syndrome (GAS) occurs which can virtually cause total suppression of cortical arousal, in other words, your effective thought process. You must consciously slow your heart rate down. As a Certified Aggression Manager, we will show you how to reverse the process, helping you regain critical lost skills and quality of judgment. To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT FIFTEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Autocratic Versus Convincing</Text>
// // </Text>), explanation: (  <Text style={styles.info}>One of the most profound discoveries I made as explored Aggression Management was Autocratic versus Convincing. It has always been understood that persuasion was made up of two basic approaches: autocratic versus democratic.
// // {'\n\n'}In the world of aggression, "convincing persuasion" means causing the aggressor to go where you want him to go (away from their aggression) and have him believe that it is his idea. "Autocratic persuasion" means the use of an authoritarian or militarist manner. "Be here at 8:00 a.m. tomorrow morning." "Just say No!" "Just do it!" Democratic persuasion gives someone the opportunity and time to make their own decision.
// // {'\n\n'}If you are an Aggression Manager and your challenge is to persuade an aggressor away from an act of aggression, you do not have the luxury of allowing that aggressor to make up his own mind. He may choose an act of aggression. You must convince him that your suggestions are in his best interest.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },


// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT SIXTEEN</Text>{'\n'}
// //   <Text style={styles.titleSub}>Convince Rather Than Demand</Text> 
// // </Text>), explanation: (  <Text style={styles.info}>I have taken the "Convince rather than Demand" concept to employers, explaining that if they would invest the time to convince their employees rather than making autocratic demands, these employees would buy into their requests, and become self-motivated to accomplish their goals. Employers would not need to supervise and manage as closely; employees would become more productive; and the company would become more productive and profitable.
// //   {'/n/n'}I have taken this concept to schools, explaining that if teachers would invest the time to convince the students that understanding this knowledge was in their best interest rather than teaching, as some do, in a more pedantic way, students would buy in to the need for learning and would be self-motivated to learn and apply their education. Students would require less rote learning and supervision. Students who are involved in their learning are less aggressive. The learning environment between teacher and student would vastly improve and students would get higher achievement scores.
// //   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },


// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT SEVENTEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Assertive versus Aggressive Behavior</Text>
// // </Text>), explanation: (  <Text style={styles.info}>"Aggressive" behavior is always destructive and negative, while "assertive" behavior is always constructive and positive. Many misunderstand "aggressive" versus "assertive" behavior. "Assertive" behavior says, "I will win, because I will be the best that I can be!" Whereas, "aggressive" behavior says, "I will win, because I will take you out!" "Aggressive" behavior is always destructive and negative, whereas, if behavior is constructive and positive it is "assertive" behavior.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT EIGHTEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>CAPS Trust Tenets </Text>
// // </Text>), explanation: (  <Text style={styles.info}>Tenets are principles to believe in. Although with humans there are no absolute (100%) rules, these tenet principles are reliable:
// // {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet One</Text>
// // {'\n\n'}If someone trusts you 100%, they will go and do whatever you wish (move away from aggressive behavior), because they trust you 100%. It is through your genuine and caring response and your developing or enhancing your trust relationship that you will enable this person to diffuse and regain their quality of judgment. It is also important to note that deception (lying) is the antithesis of trust.
// // {'\n\n'}Your most important persuasive strategy is to develop or enhance your "trust" relationship with this Emerging Aggressor, by finding things in common with this person and building upon these commonalities. From this, you will develop rapport and ultimately trust. We will expand on this very important tenet as it applies within each Aggression Stage.
// // {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Two</Text>
// // {'\n\n'}People tend to do what they perceive as in their best interest! Your challenge is to convince this aggressor that your suggested constructive path is in their best interest, in doing so, you will engender trust. If done effectively, this will engender greater trust. We will expand on this very important tenet as it applies within each Aggression Stage.
// // {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Three</Text>
// // {'\n\n'}If you want to bring people together in trust, focus on their similarities, their commonalities. If you want to tear people apart, focus on their differences. We will expand on this very important tenet as it applies within each Aggression Stage.
// // {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
// //      we highly recommend taking <Text style={styles.link} 
// //       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// // </Text>), expanded: false },

// // {   title: ( <Text>
// //   <Text  style={{ fontSize: 20 }}>CONCEPT NINETEEN</Text>{"\n"}
// //   <Text style={styles.titleSub}>Documentation</Text>
// // </Text>), explanation: (  <Text style={styles.info}>CAPS Mobile App will give you the opportunity to document any aggressive behavior and share it with others. In doing so, you must consider the Rules of Evidence.
// //   {'\n\n'}Should you share your documentation with others? Each State may approach this a little differently, so check with a local attorney. Generally, the rule is: if you document an incident but you share it with no one and tell no one about its existence, that documentation is yours alone. On the other hand, if you document and share it with someone or tell someone else about its existence, then your documentation can be subpoenaed. If you intend to share your documentation with others, as we typically suggest that you do, make sure that it can hold up scrutiny.
// //   {'\n\n'}We recommend that you share your documentation with the person to whom you report. Why? Because this person may be able to help in a more effective way due to his or her position. Also, you are sharing the risk. You are putting them on notice, should further incidents occur.
// //   {'\n'}Introduction To CAPS
// //   {'\n'}1. Know what to document -
// //   {'\n'}The Meter of Emerging Aggression (MEA) uses no mental health assessment and, therefore, does not contravene HIPAA regulations. It does not use culture, gender, age, education, sexual orientation or position in a community, thus, it does not contravene most privacy regulations.
// //   {'\n\n'}You should document date, day, time, threat made, location, applicable conditions, injuries and property damage. Collect any evidence; you can take pictures, video and audio with your CAPS Mobile App and store it with a specific case.
// //   {'\n\n'}Realize that the individual who will review your documentation may possibly make judgments without you present. It is in your best interest to draw a picture for reviewers that helps take them through the steps that brought you to the conclusion that drove your trained and knowledgeable response.
// //   {'\n\n'}1.Interview all witnesses {'\n'}Don't miss anyone. Realize that these incidents can result in lawsuits that can generate millions of dollars in liability. If you have missed a witness your documentation and credibility will suffer for it.
// //   {'\n\n'}2.Avoid delay{'\n'}
// // </Text>), expanded: false },
















    
   
   
// //     // Add more items as needed
// //   ]);

// //   const [showFooter, setShowFooter] = useState(false);

// //   const scrollViewRef = useRef<ScrollView>(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       const client_id = 'some_client_id';
// //       const user = { token: 'some_token', user_id: 'some_user_id', max_rating: undefined };

// //       if (user) {
// //         const token = { client_id };
// //         try {
// //           const response = await fetch('https://api.example.com/emergencyprocedures', {
// //             method: 'POST',
// //             headers: { 'Content-Type': 'application/json' },
// //             body: JSON.stringify(token),
// //           });
// //           const res = await response.json();

// //           if (res === null || res === undefined || res.result === 'failed') {
// //             if (res.msg === 'Your account is deactivated, please contact support.') {
// //               Alert.alert('Error', 'Account deactivated. Redirecting to login page.');
// //             } else {
// //               showAlert(res.result, res.msg);
// //             }
// //           } else {
// //             if (user.max_rating === undefined) {
// //               res.forEach((val: any) => {
// //                 val.expanded = false;
// //               });
// //               setItems(res);
// //             } else {
// //               setItems(res.filter((val: any) => val.id === user.max_rating));
// //             }
// //           }
// //         } catch (error) {
// //           showAlert('Error', 'No internet connection. Please check your connection and try again.');
// //         }
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const expandItem = (item: Item) => {
// //     setItems(items.map(i =>
// //       i === item ? { ...i, expanded: !i.expanded } : i
// //     ));
// //   };

// //   const showAlert = (result: string, msg: string) => {
// //     Alert.alert(result, msg, [{ text: 'OK' }]);
// //   };

// //   const openRegisterUser = () => {
// //     Alert.alert('Registration', 'Registration logic goes here.');
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

// //       <View style={styles.header}>
// //         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
// //           <Image source={require('../assets/images/right-arrow.png')} style={styles.backIcon} />
// //           {/* <Text style={styles.headerTitle}>Back</Text> */}
// //         </TouchableOpacity>
// //         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
// //       </View>
// //       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
// //       <View style={styles.logoi}>
// //         <Image source={require('../assets/images/escolaimg.png')} style={styles.logoicon} /> 
// //       </View>
     
// //         {items.map((item, index) => (
// //           <View key={index} style={styles.card}>
// //             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
// //               <Image source={require('../assets/images/escolaimg.png')} style={styles.clip} />
// //               <Text style={styles.cardTitle}>{item.title}</Text>
// //               <Image
// //                 source={require('../assets/images/right-arrow.png')}
// //                 style={[item.expanded ? styles.arrowDown : styles.arrow , { tintColor: '#9d0808' }] }
// //               />
// //             </TouchableOpacity>
// //             {item.expanded && (
// //               <View style={styles.cardContent}>
// //                 <Text style={styles.info}>{item.explanation}</Text>
// //               </View>
// //             )}
// //           </View>
// //         ))}
// //       </ScrollView>
// //       {!showFooter && (
// //         <View style={styles.footer}>
// //           <Text style={styles.footerText}>To use all features of this CAPS Mobile App please continue to the payment page</Text>
// //           <TouchableOpacity style={styles.registrationButton} onPress={openRegisterUser}>
// //             <Text style={styles.registrationButtonText}>REGISTRATION</Text>
// //           </TouchableOpacity>
// //         </View>
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#f5f5f5',
// //   },
// //   header: {
// //     backgroundColor: '#9d0808',
// //     padding: 15,
// //     width: '100%',
// //     flexDirection: 'row',
// //   },
// //   headerTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#fff',
// //     textAlign: 'center',
// //   },
// //   backButton: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   link: {
// //     color: '#1E90FF', // Customize the color of the link
// //     textDecorationLine: 'underline',
// //   },
// //   info: {
// //     marginTop:20,
// //     fontSize: 20,
// //     lineHeight: 25,
// //     color: '#666',
// //     textAlign:'justify'
// //   },
// //   backIcon: {
// //     width: 25,
// //     height: 25,
// //     padding: 10,
// //   tintColor: '#fff'
// //   },
// //   scrollView: {
// //     paddingHorizontal: 16,
// //   },
// //   card: {
// //     marginTop: 30,
// //     marginBottom: 30,
// //     borderRadius: 2,
// //     backgroundColor: 'transparent',
// //     elevation: 0,
// //     shadowOpacity: 0,
    
// //   },
// //   cardHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
   
    
// //   },
// //   clip: {
// //     width: 20,
// //     height: 20,
// //     tintColor: '#b71c1c',
// //     marginRight: 5,
   
    
   
   
// //   },
// //   cardTitle: {
// //     fontWeight: 'bold',
// //     color: '#333',
// //     fontSize: 18,
// //     flex: 1,
// //   },
// //   arrow: {
// //     width: 15,
// //     height: 15,
// //     tintColor: '#b71c1c', // Arrow pointing up
// //   },
// //   arrowDown: {
// //     width: 15,
// //     height: 15,
// //     marginLeft: 'auto',
// //     transform: [{ rotate: '90deg' }], // Arrow pointing down
// //   },
// //   cardContent: {
// //     paddingHorizontal: 16,
// //     paddingVertical: 10,
// //   },

// //   footer: {
// //     padding: 10,
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //   },
// //   footerText: {
// //     fontSize: 14,
// //     color: 'black',
// //     marginBottom: 10,
// //     fontWeight: '500',
// //     textAlign:'center',
// //     marginLeft:10,
// //     marginRight:10,
// //   },
// //   registrationButton: {
// //     backgroundColor: '#9d0808', // Customize the background color of the button
// //     padding: 15,
// //     borderRadius: 5,
// //     alignItems: 'center',
// //   },
// //   registrationButtonText: {
// //     color: 'white',
// //     fontSize: 18,
  
// //   },
// //   logoicon: {
// //     width: 100,
// //     height:100 ,
// //     marginHorizontal: 140,
// //     backgroundColor: 'white',
// // },
// // logoi: {
// //     flex:1,
// //     justifyContent: 'center',
// //     alignItems: 'center', 
    
    
// // },
// // titlemain :{
     
// // },
// // titleSub: {
// //     fontSize: 14, // or your preferred smaller size
// //     color: 'gray', // optional, for styling the subtext differently
// //   },
// // });

// // export default IntroductionPage;

// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: string;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const IntrductionPage: React.FC = () => {
//   const navigation = useNavigation();
//   const [items, setItems] = useState<Item[]>([
//     {
//       title: ( <Text>
//         <Text  style={{ fontSize: 20}}>Introduction</Text>{"\n"}
//         <Text style={styles.titleSub}>The Critical Aggression Prevention System (CAPS) in the palm of your hand.</Text>
//       </Text>), explanation: (  <Text style={styles.info}>I'm John D. Byrnes, D.Hum.,
//         Founder and CEO of the Center for Aggression Management and a Principal in the development of
//         the CAPS Mobile App. This CAPS Mobile App is our Critical Aggression Prevention System (CAPS) 
//         in the palm of your hands! CAPS uses scientifically-validated (face validity) indicators of
//         emerging aggression and produces evidence-based results. Without "evidence-based" results
//         how do you know what is true and what is false, or what is working and what is not working.
//         To learn more about our CAPS system watch our <Text style={styles.link}
//         onPress={() =>Linking.openURL('https://www.aggressionmanagement.com/pdf/References%20and%20Citations%20CAPS%20Mobile%20App.pdf')}>
//             CAPS Instructional Video. </Text>
//       {'\n\n'} <Text style={styles.info}>I am here to introduce you to the CAPS Mobile App, the Center for Aggression Management's Critical
//       Aggression Prevention System (CAPS), its Meter of Emerging Aggression, and recommended Responses.
//       As you read the concepts below you can identify areas of interest and focus on them specifically;
//       however, to better understand and respond with the Critical Aggression Prevention System (CAPS),
//       we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, 
//       either Certified Aggression Managers or Ambassadors' 
//       (train-the- trainers) Webinar-based Workshops. This knowledge is designed to offer operational 
//       capability and to do so, it requires an overarching knowledge of this content. Throughout this writing, 
//       I will reference "studies show," and "scientific validation," for <Text style={styles.link}
//         onPress={() =>Linking.openURL
//         ('https://www.aggressionmanagement.com/pdf/References%20and%20Citations%20CAPS%20Mobile%20App.pdf')}>
//            references and citations </Text> 
//        follow this link:
//       </Text>
      
//       {'\n\n'}Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager, thereby making you and those in your care "as safe as possible" the highest form of evidence- based Best Practices! In our Webinar- based Introduction to the CAPS Mobile App Workshops, we offer practical operational knowledge. However, we are just scratching the surface of Aggression Management. It is our hope that you may eventually wish to become more proficient as a Certified Aggression Manager or become one of our Ambassadors (Certified Trainers).
//       {'\n\n'}Like a pace car at the Dayton 500, pacing the aggressor represents the skills of coming along side of,
//        or mirroring, individuals that encourages rapport and trust.
//         Elements required to convince an emerging aggressor away from their potential path to violence. 
//         We can track mounting anxiety from the Trigger Phase through the Escalation Phase into the Crisis 
//         Phase of the Primal Aggression Continuum. Further, we can track the transition from assertive behavior
//          to aggressive behavior, through covert disconnection, to increasing overt aggressive actions
//         taken with the intent to harm displayed within the Cognitive Aggression Continuum. Using the
//         Judicious Interview, and considering the "Totality of the Circumstances,"
//         we can affirm our objective observables by identifying an aggressor's intent to harm,
//         and at what level, or stage, on the Cognitive Aggression Continuum (our secret sauce) this aggressor
//         resides. We can now weigh whether this aggressor is more a Primal (adrenaline-driven) Aggressor or 
//         Cognitive (intent-driven) Aggressor, and this permits us the more a Primal (adrenaline-driven) 
//         Aggressor or Cognitive (intent-driven) Aggressor, and this permits us the opportunity to apply
//         recommended corresponding skill sets to maximize our defusing and preventing results; thus, avoiding
//         any accusation of excessive force.
//       {'\n\n'}If you are confronted with an aggressor, your challenge will be to prevent any further escalation, persuading this aggressor away from his destructive (aggressive) path to a more constructive (assertive) path. By using methods described by the FBI and US Secret Service to identify this "aggressive" path, we can reliably prevent bullying, conflict, harassment, abuse, discrimination, and violence. Although I don't discount the wrath of an aggressive female, throughout this CAPS Mobile App, with no apologies, I characterize the aggressor as male. That is because many statistics show that up to 90% of all aggressors are men.
//       {'\n\n'} <Text style={styles.link1}  onPress={() => Linking.openURL('https://www.example.com/caps-details')}>click here</Text>
//       </Text>), expanded: false
//     },
//     {  title: ( <Text>
//       <Text  style={{ fontSize: 20 }}>CONCEPT ONE</Text>{"\n"}
//       <Text style={styles.titleSub}>Using the CAPS Mobile App</Text>
//     </Text>), explanation: (  <Text style={styles.info}>
//     Smartphones have limited space for explanations; therefore, we will place only essential insights in the phone's Mobile App and offer expanded explanations in our Webinar-based Workshops. We strongly recommend that when you first open your CAPS Mobile App, you start at the beginning and read its content, in its entirety, from its Introduction to the CAPS Meter of Emerging Aggression (MEA) through each of the concepts. As you progress within the CAPS Mobile App's Stages of Aggression, it is presumed that you have read and understand content in its entirety. If you feel that you need to know more, we recommend that you take one or more of our CAPS Webinar Workshops.
//     {'\n\n'}In the lower Stages of Aggression, where the threat level is "Low" and there is more available time, we suggest that you refer to the recommended responses offered in this app more detail. When the Threat Level is "High," first consider calling 911 and we will offer more details within your phone's Mobile App. Remember, if aggression occurs within your company use the CAPS Mobile App to help you, but always follow your Company's internal policies and procedures.
//     {'\n\n'}Our scientifically validated Critical Aggression Prevention System's (CAPS) Meter of Emerging Aggression (MEA) indicates the Stages of Aggression and is at the cutting edge of science; whereas, Best Practice responses are more an art than science. It is our objective to offer Best Practice responses that correlate with each stage of aggression predicted in the Meter of Emerging Aggression (MEA) but remember that you must always use your professional judgment as to what to do and when. The greater your understanding of these Best Practice Responses, the more skills you will have to exercise at your own discretion and professional judgment.
//     {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
//    </Text>), expanded: false },

//     {   title: ( <Text>
//       <Text  style={{ fontSize: 20 }}>CONCEPT TWO</Text>{"\n"}
//       <Text style={styles.titleSub}>Are you an Aggression Manger?</Text>
//     </Text>), explanation: (  <Text style={styles.info}>Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager (and at some point in the future, become a Certified Aggression Manager), thereby making you and those in your care "as safe as possible," the highest form of Evidence- based Best Practices!</Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT THREE</Text>{"\n"}
//   <Text style={styles.titleSub}>Critical Aggression Prevention System(CAPS)</Text>
// </Text>), explanation: (  <Text style={styles.info}>When it comes to workplace and/or school safety, nothing is more important than a threat assessment program. That's why, as an organization or institution, you probably have a meticulously designed program that engages people to report strange behaviors (If you see something, say something). The issue with this approach is that you're left overwhelmed with subjective references that are difficult to evaluate. But you have a responsibility to follow up, so the question becomes, how do you tell who's a real threat and who's simply acting strange?
// {'\n\n'}Profiling is one of the go-to practices, but studies have shown and news reports of workplace tragedies - prove that profiling doesn't work. Without a clear-cut method going forward, you end up over-reacting or worse, under-reacting. So how do you find a better method; an objective scientifically validated method that proactively detects emerging aggression (someone on the path to violence)? Enabling you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor? For a program based on prevention and effective mitigation, instead of responding and reaction?
// {'\n\n'}There is a better method and it's called CAPS from the Center for Aggression Management. CAPS, or the Critical Aggression Prevention System, is the first and only scientifically validated "system" with three critical attributes empowering you to make your workplace as safe as possible, the highest form of Evidence- based Best Practices! Based on 23 years of research into aggressive behavior, CAPS relies on the measurement of emerging aggression, instead of focusing on mental health issues or ineffective, and often illegal, profiling. CAPS enables you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking  <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },


// {title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT FOUR</Text>{"\n"}
//   <Text style={styles.titleSub}>The Primal and Cognitive Aggression Continua, the Basis for the MEA</Text>
// </Text>), explanation: (  <Text style={styles.info}><Text style={{ fontWeight: 'bold'}}>1. Primal Aggression Continuum</Text>{'\n'}

// The Primal Aggression Continuum utilizes forces that are physiological (chemical and neurological) actions the body takes to preserve and protect itself (Natural Responses). The civility with which we treat one another in our day-to-day dealings is a veneer that masks those forces until we feel endangered or threatened, either physically, emotionally, intellectually (professionally) or spiritually. Then that most primal of human chemicals, adrenaline, kicks in naturally in mind and triggering the "fight or body, flight" mode/response. Initially these modes/responses are more subtle but grow in dynamics and influence as a potential aggressor progresses up this Aggression Continuum. It is important to note that often in the lower stages of the Primal Aggression Continuum, emerging aggression to the untrained eye is unseen. It is incumbent upon us to identify this early emerging aggression because aggression is easiest to diffuse in its earlier stages. As an aggressor approaches the Crisis Phase, Primal Aggression is usually described as an individual losing control and in the extreme what I like to call the "Red Faced Ready to Explode Guy;" whereas Cognitive Aggression is usually the aggression of a victimizer, predator and/or ultimately a terrorist (perpetrator of murder/suicide) who shows very little emotion or the effects of adrenaline.
// {'\n\n'}<Text style={{fontWeight:'bold'}}>2.Cognitive Aggression Continuum</Text>{'\n'}Unlike primal aggression reactions, which are natural responses in the mind and body, the Cognitive Aggression Continuum describes deliberate and conscious behavior, usually manipulative in nature, to enable the aggressor to achieve and maintain an advantage over "victims" and over any individual who intervenes. Sometimes Cognitive Aggression can be non- conscious. Example: conscious behavior as a child becomes non- conscious behavior as an adult an individual repeats aggressive behavior so often that he no longer gives it much thought. This aggressive behavior becomes a habit and he becomes known as a vicious person.
// {'\n\n'}Cognitive Aggression, often well planned and always insidious, is a far greater intellectual challenge for the Aggression Manager. Cognitive Aggressive behavior progresses through nine stages, which encompass the complete spectrum
// of human intent-driven aggression.It has become clear that as an individual's aggression escalates,
// their quality of judgment
// diminishes. There can be a
// progression of intent to harm that
// occurs in the initial stages almost
// unnoticed, even by the aggressor.
// An individual who does not see
// himself as "aggressive" but is
// inconsiderate and/or patently
// distrustful of others, become more
// aggressive toward an individual(s)
// as he escalates. Like the analysis of
// the "Boiling Frog," without realizing
// it, this aggressor progressively
// becomes more aggressive to the
// point where he is prepared to give
// up his life for a cause sometimes
// without realizing how very
// aggressive he has become. When an individual moves away from a win/win solution and begins to harden his position on his issue versus your issues, he is beginning on a path of definable Cognitive Aggression. This course could ultimately result in "plunging together into the abyss," a culmination of violence to you, those in your care and even to the aggressor himself (Perpetrator of Murder/Suicide).
// {'\n\n'}Cognitive Aggressors are typically
// far more premeditated, deliberate and determined in their actions; making them potentially the most lethal of all aggressors! Perpetrators of Murder/Suicide (Terrorists), whether executed by a surrogate for ISIS, a worker returning to his workplace targeting supervisors, a love interest or fellow workers and then himself, or by a young man on his classmates and then himself, can transcend through the Cognitive Aggression Continuum and not yet perpetrate physical violence. Either his victim(s) is not yet available to him or he has not yet positioned his victim(s) for attack, however the indicators are present and can be identified. Murder/suicide events are on the rise. Often only noticed on local news, many events are not discussed on a national level, and many of us are often surprised to hear of such an event in our workplaces or neighborhoods.Learn more at our Educational Website, look for "The Primal and Cognitive Aggression Continua, the Basis for the MEA"
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT FIVE</Text>{"\n"}
//   <Text style={styles.titleSub}>The Judious Interview</Text>
// </Text>), explanation: (  <Text style={styles.info}>Because we are assessing humans, even objective measurable observables of body language, behavior and communication indicators, in themselves, are not always absolute. Thus, we developed the Judicious Interview! Once we have identified an aggressor on the Meter of Emerging Aggression, the goal of the Judicious Interview is to use Scientific Cause and Effect Principals to affirm whether this aggressor is a "person of interest." We accomplish this by asking specific questions or taking specific actions that produces a predicable response illustrating hostile or malicious intent.
//   {'\n\n'}Unlike therapy, the initial goal of the Judicious Interview is not about forming a connection with the aggressor but to identify an aggressor and diffuse/prevent any aggressive act. Once an aggressor has been identified, building rapport and trust may be useful and applied to persuade the aggressor away from their path of violence, while they begin to regain their quality of judgment. The purpose of the Judicious Interview is to better understand the level of aggression and identify their mission or target and begin a diffusing/preventing process.
//   {'\n\n'}Consider ways to get to the central question of intent, "Help me understand the intent behind your behavior." Or "Help me understand the intent meant by what you said?" Although we recommend that you ask directly about "intent," you may also put this in your own words such as, "What are you trying to accomplish by what you are doing?" or "Help me understand where your behavior and comments are heading?"
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT SIX</Text>{"\n"}
//   <Text style={styles.titleSub}>SolutionPerson</Text>
// </Text>), explanation: (  <Text style={styles.info}>If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to the men and women, as "SolutionPerson." Be SolutionPerson!
// {'\n\n'}In my many seminars around the country, I tell the story of a top business executive I knew years ago. I asked him once what accounted for his success in dealing with so many challenges day after day. He smiled and told me that if he were to open his shirt, I would see a big red "S" on his chest, and it stood for "Solutionman!" His philosophy was to seek solutions, whatever that took not assign blame, nor take sides, nor make excuses, nor sit around complaining, but to solve problems. He refused to allow himself to become part of the problem, but only permitted himself to be part of the solution. He repeated the old saying that has very special meaning with Aggression Managers, "If you're not part of the solution, you are probably part of the problem."
// {'\n\n'}I've thought about that over the years, and adopted his philosophy in my own career. Part of gaining trust is being perceived as one who seeks solutions. If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to men and women, as "SolutionPerson."
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT SEVEN</Text>{"\n"}
//   <Text style={styles.titleSub}>The Art Of Convincing</Text>
// </Text>), explanation: (  <Text style={styles.info}>The Art of Convincing is getting someone to agree with you, because they believe it is good for them, preferably without them thinking it was your idea. The use of Pacing the Aggressor strategies with verbal and non-verbal techniques, and the effective use and reading of body language, all can lead to this result.
// {'\n\n'}Are you sharing your opinion, or are you attempting to change behavior? Using a Socratic method, you can convince this aggressor away from his aggression, and if possible, have him think it was his idea. The Socratic Method is achieved through questions. Socrates asked questions that guided his subject to the answer he wished them to hear and learn. Through this method, he could convince his subject of his lesson and often his subject would think it was their idea.
// {'\n\n'}Persuasion is not necessarily a gentle art, although it is best practiced as such at the outset of an aggressive incident. Many aggressors can indeed be artfully nudged out of their aggressive intent, while some require stronger persuasion. I like to characterize persuasion as "coming alongside" an aggressor, and then, using numerous persuasive Pacing the Aggressor skills, induce this individual to think your way while he is buying into the notion that it was his own idea. We will venture to share these techniques with you throughout this CAPS Education Website, and we will reference them in the CAPS Mobile App.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },


// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT EIGHT</Text>{"\n"}
//   <Text style={styles.titleSub}>Scientifically-Reliable: Meter of Emerging Aggression (MEA)</Text>
// </Text>), explanation: (  <Text style={styles.info}>The Meter of Emerging Aggression (MEA) is scientifically-reliable and thus it offers evidence-based Best Practices, and the opportunity to reliably prevent all forms of aggression from their outset through and including the most lethal form of violence, someone on the path to becoming a perpetrator of murder/suicide. Because our MEA represents the sequential precursors to each stage of aggressive behavior, it offers the opportunity to reliably prevent escalation of aggression, ultimately preventing violence.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT NINE</Text>{"\n"}
//   <Text style={styles.titleSub}>Taking Responsibility for Yours Actions </Text>
// </Text>), explanation: (  <Text style={styles.info}>As an Aggression Manager you must be able to say that you acted judiciously and to the best of your ability, under difficult circumstances, to diffuse this aggressor- and that you take full responsibility for your actions. No matter who initiated the aggressive behavior, you will be held responsible for your actions. You may only use "reasonable force" within an aggression moment. The problem is, what "reasonable force" is may ultimately be determined in a court of law, not in the aggression moment itself. It is our objective to provide you with the knowledge and skills, along with your professional judgment, to help make you, and those in your care, as safe as possible.
// {'\n\n'}Be your own best advocate.
// {'\n\n'}You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise.
// {'\n\n'}We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
// {'\n\n'}The CAPS responses are excellent templates to be used based upon your professional judgment, your understanding of this Emerging Aggressor, and the circumstances that you are in. Although we have found these responses extremely effective, we can make no warrants as to your effectiveness with a particular Emerging Aggressor. Only you know this individual and the circumstance that you are in, so you must use your professional judgment in applying any and all of these suggested template Best Practice 
// responses.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT TEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Be your own best advocate</Text>
// </Text>), explanation: (  <Text style={styles.info}>You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise. We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT ELEVEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Four Key Elements in each Stage of Aggression</Text>
// </Text>), explanation: (  <Text style={styles.info}>
//   <Text style={{fontWeight:'bold'}}>Aggression Stage Introduction</Text>
//   {'\n'}This is an introduction to each stage of aggression, which further describes and affirms your observations, plus three important perspectives:
//   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective One (What if you are the aggressor?)</Text>
//   {'\n'}How should you respond if you are the aggressor? You may not think of yourself as an aggressor, you may be inadvertently responding to another's aggression. If you find yourself on this Meter of Emerging Aggression (MEA), what should you do? These insights may help you remove yourself from further escalation.
//   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Two (What if you are observing an aggressor?)</Text>
//   {'\n'}How should you respond if you are observing an aggressor(s)? You will learn the insights and knowledge you can best use to diffuse the emerging aggressor, and prevent further escalation?
//   {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Three (What is the role of "trust?")</Text>
//   {'\n'}How should you respond recognizing our "CAPS Trust Tenet:" If someone trusts us 100%, upon your request, they will move away from their aggression because they trust us 100%! In Perspective Three you will learn the importance of understanding the element of "trust" and its implications. Aggressive behavior undermines "trust!"
//   {'\n\n'}Let's say you are the manager of a department that includes one hundred individuals, including supervisors and employees. How many of those individuals would you suspect to be loyal to you and your organization? 34! How many of those individuals would you estimate are headed out the door? 36!
//   {'\n\n'}These findings from the Walker Loyalty Report for Loyalty in the Workplace states "just 34% of employees are staying while another 36% are about to walk. That leaves 30% who either haven't made up their minds or are just going with the flow". This Walker Report assesses loyalty five ways. Of these five elements, the single most important is "trust." Walker informs us that, "Trust, as the core culprit, is an operative driver." Realizing that, according to Walker, "only one third of the individuals are with you, therefore two-thirds are either on the fence or going against you;" if you wish to boost loyalty, leadership, teamwork and thus productivity then focusing on trust may be the leverage point, but until now it has been the most difficult to measure. With the Meter of Emerging Aggression, we can identify distrustful (aggressive) behavior and prevent it.
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT TWELEVE</Text>{"\n"}
//   <Text style={styles.titleSub}>Every behavior begins with a thought</Text>
// </Text>), explanation: (  <Text style={styles.info}>We can plant a constructive thought through visualization. Military, law enforcement and professional athletes use visualization often as an effective tool. They call it developing a "conditioned response." The notion that the mind serves as a kind of gatekeeper for emotional or aggressive' behavior is at the core of the cognitive theory of emotions. This cognitive appraisal activity is typically rapid. The question is, will these initial cognitive thoughts be a constructive or destructive thoughts? In the "Aggression Environment" they can quickly become negative and destructive! We can, and must, use visualization to plant constructive thoughts!
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT THIRTEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Surviving the</Text>
// </Text>), explanation: (  <Text style={styles.info}>The chances that you will find yourself face-to-face with an Active Shooter are quite slim, however, in our increasingly aggressive world should this occur, here are some important facts.
//   {'\n\n'}The Moment of Commitment is "When a person decides to pull his weapon and begin shooting." According to Gavin deBecker in his book "Just 2 Seconds," the time between the Moment of Commitment and when the first round is discharged is just 2-seconds!
//   {'\n\n'}Within the next horrific five seconds there will be victims: dead, dying and/or wounded! There are virtually no security or law enforcement teams that will reliably arrive within these first horrific five seconds. Regardless of how well trained, or equipped, security or law enforcement may be, they will arrive on scene stepping over those slain during those horrific first 5 seconds!
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
//   </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT FOURTEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Controlling Your Adrenaline Rush with Cycle Breathing</Text>
// </Text>), explanation: (  <Text style={styles.info}>Cycle Breathing is a method effectively in dire circumstances by the US Navy Seals. You consciously breathe in deeply through your nose, counting to four, hold to the count of two, exhale out through your mouth to the count of four and hold to the count of two. Again. And again. Practice Cycle Breathing as you drive into work, or as you return home, or as you put your head on the pillow at night. The worst place to practice Cycle Breathing is in front of an aggressor. Make Cycle Breathing yours, so that when you need it, it's available to you. You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me - this works!
//   {'\n\n'}Adrenaline in one adversary, i.e. "Emerging Aggressor," activates the adrenaline in you, preparing you for attack. Adrenaline is released into your bloodstream. Your heart accelerates, you feel perspiration, and your breathing patterns change. As adrenaline increases your heart rate, you begin to lose your ability to think creatively, innovatively and thoughtfully. Cycle Breathing begins to pay off. It relaxes your body, increases blood flow and essential oxygen to your brain, and counteracts the effects of adrenaline that cloud your own logical thinking.
//   {'\n\n'}Per Redford Williams (1989) General Adaptation Syndrome (GAS) occurs which can virtually cause total suppression of cortical arousal, in other words, your effective thought process. You must consciously slow your heart rate down. As a Certified Aggression Manager, we will show you how to reverse the process, helping you regain critical lost skills and quality of judgment. To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT FIFTEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Autocratic Versus Convincing</Text>
// </Text>), explanation: (  <Text style={styles.info}>One of the most profound discoveries I made as explored Aggression Management was Autocratic versus Convincing. It has always been understood that persuasion was made up of two basic approaches: autocratic versus democratic.
// {'\n\n'}In the world of aggression, "convincing persuasion" means causing the aggressor to go where you want him to go (away from their aggression) and have him believe that it is his idea. "Autocratic persuasion" means the use of an authoritarian or militarist manner. "Be here at 8:00 a.m. tomorrow morning." "Just say No!" "Just do it!" Democratic persuasion gives someone the opportunity and time to make their own decision.
// {'\n\n'}If you are an Aggression Manager and your challenge is to persuade an aggressor away from an act of aggression, you do not have the luxury of allowing that aggressor to make up his own mind. He may choose an act of aggression. You must convince him that your suggestions are in his best interest.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },


// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT SIXTEEN</Text>{'\n'}
//   <Text style={styles.titleSub}>Convince Rather Than Demand</Text> 
// </Text>), explanation: (  <Text style={styles.info}>I have taken the "Convince rather than Demand" concept to employers, explaining that if they would invest the time to convince their employees rather than making autocratic demands, these employees would buy into their requests, and become self-motivated to accomplish their goals. Employers would not need to supervise and manage as closely; employees would become more productive; and the company would become more productive and profitable.
//   {'/n/n'}I have taken this concept to schools, explaining that if teachers would invest the time to convince the students that understanding this knowledge was in their best interest rather than teaching, as some do, in a more pedantic way, students would buy in to the need for learning and would be self-motivated to learn and apply their education. Students would require less rote learning and supervision. Students who are involved in their learning are less aggressive. The learning environment between teacher and student would vastly improve and students would get higher achievement scores.
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },


// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT SEVENTEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Assertive versus Aggressive Behavior</Text>
// </Text>), explanation: (  <Text style={styles.info}>"Aggressive" behavior is always destructive and negative, while "assertive" behavior is always constructive and positive. Many misunderstand "aggressive" versus "assertive" behavior. "Assertive" behavior says, "I will win, because I will be the best that I can be!" Whereas, "aggressive" behavior says, "I will win, because I will take you out!" "Aggressive" behavior is always destructive and negative, whereas, if behavior is constructive and positive it is "assertive" behavior.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT EIGHTEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>CAPS Trust Tenets </Text>
// </Text>), explanation: (  <Text style={styles.info}>Tenets are principles to believe in. Although with humans there are no absolute (100%) rules, these tenet principles are reliable:
// {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet One</Text>
// {'\n\n'}If someone trusts you 100%, they will go and do whatever you wish (move away from aggressive behavior), because they trust you 100%. It is through your genuine and caring response and your developing or enhancing your trust relationship that you will enable this person to diffuse and regain their quality of judgment. It is also important to note that deception (lying) is the antithesis of trust.
// {'\n\n'}Your most important persuasive strategy is to develop or enhance your "trust" relationship with this Emerging Aggressor, by finding things in common with this person and building upon these commonalities. From this, you will develop rapport and ultimately trust. We will expand on this very important tenet as it applies within each Aggression Stage.
// {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Two</Text>
// {'\n\n'}People tend to do what they perceive as in their best interest! Your challenge is to convince this aggressor that your suggested constructive path is in their best interest, in doing so, you will engender trust. If done effectively, this will engender greater trust. We will expand on this very important tenet as it applies within each Aggression Stage.
// {'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Three</Text>
// {'\n\n'}If you want to bring people together in trust, focus on their similarities, their commonalities. If you want to tear people apart, focus on their differences. We will expand on this very important tenet as it applies within each Aggression Stage.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>CONCEPT NINETEEN</Text>{"\n"}
//   <Text style={styles.titleSub}>Documentation</Text>
// </Text>), explanation: (  <Text style={styles.info}>CAPS Mobile App will give you the opportunity to document any aggressive behavior and share it with others. In doing so, you must consider the Rules of Evidence.
//   {'\n\n'}Should you share your documentation with others? Each State may approach this a little differently, so check with a local attorney. Generally, the rule is: if you document an incident but you share it with no one and tell no one about its existence, that documentation is yours alone. On the other hand, if you document and share it with someone or tell someone else about its existence, then your documentation can be subpoenaed. If you intend to share your documentation with others, as we typically suggest that you do, make sure that it can hold up scrutiny.
//   {'\n\n'}We recommend that you share your documentation with the person to whom you report. Why? Because this person may be able to help in a more effective way due to his or her position. Also, you are sharing the risk. You are putting them on notice, should further incidents occur.
//   {'\n'}Introduction To CAPS
//   {'\n'}1. Know what to document -
//   {'\n'}The Meter of Emerging Aggression (MEA) uses no mental health assessment and, therefore, does not contravene HIPAA regulations. It does not use culture, gender, age, education, sexual orientation or position in a community, thus, it does not contravene most privacy regulations.
//   {'\n\n'}You should document date, day, time, threat made, location, applicable conditions, injuries and property damage. Collect any evidence; you can take pictures, video and audio with your CAPS Mobile App and store it with a specific case.
//   {'\n\n'}Realize that the individual who will review your documentation may possibly make judgments without you present. It is in your best interest to draw a picture for reviewers that helps take them through the steps that brought you to the conclusion that drove your trained and knowledgeable response.
//   {'\n\n'}1.Interview all witnesses {'\n'}Don't miss anyone. Realize that these incidents can result in lawsuits that can generate millions of dollars in liability. If you have missed a witness your documentation and credibility will suffer for it.
//   {'\n\n'}2.Avoid delay{'\n'}Act while memories are fresh. Delay can cause distortions. Be aware that your adrenaline rush can also create distortions. Many are following up initial witness interviews with another interview 24-hours later, once the effects of adrenaline may have worn off. Be aware that when a witness sees an unfamiliar shape or scene, they often automatically correct it to something they
//    are familiar with.
//   {'\n\n'}3. Be aware of Tachypsychia{'\n'}Distortion that occurs when your mind speeds up to cope with an aggressive moment (adrenaline rush) and it causes our perception of that event to seem as though it were in slow motion.
//   {'\n\n'}4. Be aware of Tunnel Vision{'\n'}Our peripheral vision reduces to transfix on a threatening focal point causing us to miss critical information in our peripheral vision.
//   {'\n\n'}5. Be aware of Auditory Exclusion{'\n'}The loss of hearing due to the adrenaline rush. Law enforcement officers have told me that they saw the gun, they saw the flare as the bullet was ejected through the gun barrel and they saw the window glass break behind them but they never heard the explosion discharged. as the bullet was discharged
//   {'\n'} Your challenge is to see through the effects of the adrenaline rush and help the witnesses do the same.
//   {'\n\n'}6. Be objective{'\n'}The opposite of subjective! Just the facts, please, not your opinion. Let those who review your report come to the same opinion that you have by offering the facts in a way that convinces them that you acted professionally and unbiased. The Meter of Emerging Aggression provides objective measurable enabling you to do so.
//   {'\n\n'}7. Organize chronologically{'\n'}An effective way to bring a reviewer to your perspective is to recount everything as if writing a script, a storyline that a reviewer can easily follow.
//   {'\n\n'}8. Tell the truth{'\n'}A single untruth, distortion or exaggeration can undermine your entire documentation. Remember someone may try to undermine your credibility. If a case goes to court it will not be weeks away, but years away.
//   {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
//      we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
// </Text>), expanded: false },
















    
   
   
//     // Add more items as needed
//   ]);

//   const [showFooter, setShowFooter] = useState(false);

//   const scrollViewRef = useRef<ScrollView>(null);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const client_id = 'some_client_id';
//   //     const user = { token: 'some_token', user_id: 'some_user_id', max_rating: undefined };

//   //     if (user) {
//   //       const token = { client_id };
//   //       try {
//   //         const response = await fetch('https://api.example.com/emergencyprocedures', {
//   //           method: 'POST',
//   //           headers: { 'Content-Type': 'application/json' },
//   //           body: JSON.stringify(token),
//   //         });
//   //         const res = await response.json();

//   //         if (res === null || res === undefined || res.result === 'failed') {
//   //           if (res.msg === 'Your account is deactivated, please contact support.') {
//   //             Alert.alert('Error', 'Account deactivated. Redirecting to login page.');
//   //           } else {
//   //             showAlert(res.result, res.msg);
//   //           }
//   //         } else {
//   //           if (user.max_rating === undefined) {
//   //             res.forEach((val: any) => {
//   //               val.expanded = false;
//   //             });
//   //             setItems(res);
//   //           } else {
//   //             setItems(res.filter((val: any) => val.id === user.max_rating));
//   //           }
//   //         }
//   //       } catch (error) {
//   //         showAlert('Error', 'No internet connection. Please check your connection and try again.');
//   //       }
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   const expandItem = (item: Item) => {
//     setItems(items.map(i =>
//       i === item ? { ...i, expanded: !i.expanded } : i
//     ));
//   };

//   const showAlert = (result: string, msg: string) => {
//     Alert.alert(result, msg, [{ text: 'OK' }]);
//   };

//   // const openRegisterUser = () => {
//   //   Alert.alert('Registration', 'Registration logic goes here.');
//   // };
//   const handlePress = () => {
//     Alert.alert(
//       'Confirm',
//       'Are you sure you want to navigate to Contacts?',
//       [
//         {
//           text: 'No',
//           onPress: () => console.log('Cancel Pressed'),
//           style: 'cancel',
//         },
//         {
//           text: 'Yes',
//           onPress: () => navigation.navigate('Contacts'),
//         },
//       ],
//       { cancelable: false }
//     );
//   };
  

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//           {/* <Text style={styles.headerTitle}>Back</Text> */}
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
//       <View style={styles.logoi}>
//         <Image source={require('../assets/img/CAPS_Logo.png')} style={styles.logoicon} /> 
//       </View>
     
//         {items.map((item, index) => (
//           <View key={index} style={styles.card}>
//             <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
//               <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <Image
//                 source={require('../assets/img/right-arrow.png')}
//                 style={[item.expanded ? styles.arrowDown : styles.arrow , { tintColor: '#9d0808' }] }
//               />
//             </TouchableOpacity>
//             {item.expanded && (
//               <View style={styles.cardContent}>
//                 <Text style={styles.info}>{item.explanation}</Text>
//               </View>
//             )}
//           </View>
          
          
//         ))}
//       </ScrollView>
//       <Footer navigation={navigation} />
//     </View>
//   );
// };

// const Footer = ({ navigation }) => (
//   <View style={styles.footer}>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
//       <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Contacts')}>
//       <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Notifications')}>
//       <Image source={require('../assets/img/profile_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Messages')}>
//       <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//     <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
//       <Image source={require('../assets/img/logout_icon.png')} style={styles.footerIcon} />
//     </TouchableOpacity>
//   </View>
// );


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#9d0808',
//     padding: 15,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#fff',
//     textAlign: 'center',
//   },
//   backButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   link: {
//     color: '#1E90FF', // Customize the color of the link
//     textDecorationLine: 'underline',
//   },
//   link1: {
//     color: '#b71c1c', // Customize the color of the link
//     textDecorationLine: 'underline',
//   },
//   info: {
//     marginTop:20,
//     fontSize: 16,
//     lineHeight: 25,
//     color: '#666',
//     textAlign:'justify'
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     padding: 10,
//   tintColor: 'white'
//   },
//   scrollView: {
//     paddingHorizontal: 16,
    
//   },
//   card: {
//     marginTop: 30,
//     marginBottom: 30,
//     borderRadius: 2,
//     backgroundColor: 'transparent',
//     elevation: 0,
//     shadowOpacity: 0,
    
//   },
//   cardHeader: {
//     flexDirection: 'row',
    
   
    
//   },
//   clip: {
//     marginVertical:5,
//     width: 20,
//     height: 22,
//     tintColor: '#b71c1c',
//     marginRight: 10,
    
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//     color: '#333',
//     fontSize: 18,
//     flex: 1,
//   },
//   arrow: {
//     width: 15,
//     height: 15,
//     tintColor: '#b71c1c', // Arrow pointing up
//   },
//   arrowDown: {
//     width: 15,
//     height: 15,
//     marginLeft: 'auto',
//     transform: [{ rotate: '90deg' }], // Arrow pointing down
    
//   },
//   cardContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },

// //   footer: {
// //     padding: 10,
// //     alignItems: 'center',
// //     backgroundColor: 'white',
// //   },
//   footerText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 10,
//     fontWeight: '500',
//     textAlign:'center',
//     marginLeft:10,
//     marginRight:10,
//   },
  
//   logoicon: {
//     width: 100,
//     height:100 ,
//     marginHorizontal: 140,
//     backgroundColor: 'white',
// },
// logoi: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center', 
    
    
// },
// titlemain :{
     
// },
// titleSub: {
//     fontSize: 14, // or your preferred smaller size
//     color: 'gray', // optional, for styling the subtext differently
//   },
//   footer: {
//     height: 60,
//     backgroundColor: '#b71c1c',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   footerButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//     tintColor: 'white',
//   },
//   spacer: {
//     height: 10, // Adjust the height for desired spacing
//   },
// });

// export default IntrductionPage;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const IntrductionPage: React.FC = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([
    {
      title: ( <Text>
        <Text  style={{ fontSize: 20}}>Introduction</Text>{"\n"}
        <Text style={styles.titleSub}>The Critical Aggression Prevention System (CAPS) in the palm of your hand.</Text>
      </Text>), explanation: (  <Text style={styles.info}>I'm John D. Byrnes, D.Hum.,
        Founder and CEO of the Center for Aggression Management and a Principal in the development of
        the CAPS Mobile App. This CAPS Mobile App is our Critical Aggression Prevention System (CAPS) 
        in the palm of your hands! CAPS uses scientifically-validated (face validity) indicators of
        emerging aggression and produces evidence-based results. Without "evidence-based" results
        how do you know what is true and what is false, or what is working and what is not working.
        To learn more about our CAPS system watch our <Text style={styles.link}
        onPress={() =>Linking.openURL('https://www.aggressionmanagement.com/critical-aggression-prevention-system-instructional-video.php')}>
            CAPS Instructional Video. </Text>
      {'\n\n'} <Text style={styles.info}>I am here to introduce you to the CAPS Mobile App, the Center for Aggression Management's Critical
      Aggression Prevention System (CAPS), its Meter of Emerging Aggression, and recommended Responses.
      As you read the concepts below you can identify areas of interest and focus on them specifically;
      however, to better understand and respond with the Critical Aggression Prevention System (CAPS),
      we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, 
      either Certified Aggression Managers or Ambassadors' 
      (train-the- trainers) Webinar-based Workshops. This knowledge is designed to offer operational 
      capability and to do so, it requires an overarching knowledge of this content. Throughout this writing, 
      I will reference "studies show," and "scientific validation," for <Text style={styles.link}
        onPress={() =>Linking.openURL
        ('https://www.aggressionmanagement.com/pdf/References%20and%20Citations%20CAPS%20Mobile%20App.pdf')}>
           references and citations </Text> 
       follow this link:
      </Text>
      
      {'\n\n'}Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager, thereby making you and those in your care "as safe as possible" the highest form of evidence- based Best Practices! In our Webinar- based Introduction to the CAPS Mobile App Workshops, we offer practical operational knowledge. However, we are just scratching the surface of Aggression Management. It is our hope that you may eventually wish to become more proficient as a Certified Aggression Manager or become one of our Ambassadors (Certified Trainers).
      {'\n\n'}Like a pace car at the Dayton 500, pacing the aggressor represents the skills of coming along side of,
       or mirroring, individuals that encourages rapport and trust.
        Elements required to convince an emerging aggressor away from their potential path to violence. 
        We can track mounting anxiety from the Trigger Phase through the Escalation Phase into the Crisis 
        Phase of the Primal Aggression Continuum. Further, we can track the transition from assertive behavior
         to aggressive behavior, through covert disconnection, to increasing overt aggressive actions
        taken with the intent to harm displayed within the Cognitive Aggression Continuum. Using the
        Judicious Interview, and considering the "Totality of the Circumstances,"
        we can affirm our objective observables by identifying an aggressor's intent to harm,
        and at what level, or stage, on the Cognitive Aggression Continuum (our secret sauce) this aggressor
        resides. We can now weigh whether this aggressor is more a Primal (adrenaline-driven) Aggressor or 
        Cognitive (intent-driven) Aggressor, and this permits us the more a Primal (adrenaline-driven) 
        Aggressor or Cognitive (intent-driven) Aggressor, and this permits us the opportunity to apply
        recommended corresponding skill sets to maximize our defusing and preventing results; thus, avoiding
        any accusation of excessive force.
      {'\n\n'}If you are confronted with an aggressor, your challenge will be to prevent any further escalation, persuading this aggressor away from his destructive (aggressive) path to a more constructive (assertive) path. By using methods described by the FBI and US Secret Service to identify this "aggressive" path, we can reliably prevent bullying, conflict, harassment, abuse, discrimination, and violence. Although I don't discount the wrath of an aggressive female, throughout this CAPS Mobile App, with no apologies, I characterize the aggressor as male. That is because many statistics show that up to 90% of all aggressors are men.
      {'\n\n'} <Text style={styles.link1}  onPress={() => Linking.openURL('https://www.aggressionmanagement.com/caps_training.php')}>click here</Text>
      </Text>), expanded: false
    },
    {  title: ( <Text>
      <Text  style={{ fontSize: 20 }}>CONCEPT ONE</Text>{"\n"}
      <Text style={styles.titleSub}>Using the CAPS Mobile App</Text>
    </Text>), explanation: (  <Text style={styles.info}>
    Smartphones have limited space for explanations; therefore, we will place only essential insights in the phone's Mobile App and offer expanded explanations in our Webinar-based Workshops. We strongly recommend that when you first open your CAPS Mobile App, you start at the beginning and read its content, in its entirety, from its Introduction to the CAPS Meter of Emerging Aggression (MEA) through each of the concepts. As you progress within the CAPS Mobile App's Stages of Aggression, it is presumed that you have read and understand content in its entirety. If you feel that you need to know more, we recommend that you take one or more of our CAPS Webinar Workshops.
    {'\n\n'}In the lower Stages of Aggression, where the threat level is "Low" and there is more available time, we suggest that you refer to the recommended responses offered in this app more detail. When the Threat Level is "High," first consider calling 911 and we will offer more details within your phone's Mobile App. Remember, if aggression occurs within your company use the CAPS Mobile App to help you, but always follow your Company's internal policies and procedures.
    {'\n\n'}Our scientifically validated Critical Aggression Prevention System's (CAPS) Meter of Emerging Aggression (MEA) indicates the Stages of Aggression and is at the cutting edge of science; whereas, Best Practice responses are more an art than science. It is our objective to offer Best Practice responses that correlate with each stage of aggression predicted in the Meter of Emerging Aggression (MEA) but remember that you must always use your professional judgment as to what to do and when. The greater your understanding of these Best Practice Responses, the more skills you will have to exercise at your own discretion and professional judgment.
    {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
   </Text>), expanded: false },

    {   title: ( <Text>
      <Text  style={{ fontSize: 20 }}>CONCEPT TWO</Text>{"\n"}
      <Text style={styles.titleSub}>Are you an Aggression Manger?</Text>
    </Text>), explanation: (  <Text style={styles.info}>Identifying and managing aggressive behavior is a fluid process. It is our objective to help you become an effective Aggression Manager (and at some point in the future, become a Certified Aggression Manager), thereby making you and those in your care "as safe as possible," the highest form of Evidence- based Best Practices!</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT THREE</Text>{"\n"}
  <Text style={styles.titleSub}>Critical Aggression Prevention System(CAPS)</Text>
</Text>), explanation: (  <Text style={styles.info}>When it comes to workplace and/or school safety, nothing is more important than a threat assessment program. That's why, as an organization or institution, you probably have a meticulously designed program that engages people to report strange behaviors (If you see something, say something). The issue with this approach is that you're left overwhelmed with subjective references that are difficult to evaluate. But you have a responsibility to follow up, so the question becomes, how do you tell who's a real threat and who's simply acting strange?
{'\n\n'}Profiling is one of the go-to practices, but studies have shown and news reports of workplace tragedies - prove that profiling doesn't work. Without a clear-cut method going forward, you end up over-reacting or worse, under-reacting. So how do you find a better method; an objective scientifically validated method that proactively detects emerging aggression (someone on the path to violence)? Enabling you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor? For a program based on prevention and effective mitigation, instead of responding and reaction?
{'\n\n'}There is a better method and it's called CAPS from the Center for Aggression Management. CAPS, or the Critical Aggression Prevention System, is the first and only scientifically validated "system" with three critical attributes empowering you to make your workplace as safe as possible, the highest form of Evidence- based Best Practices! Based on 23 years of research into aggressive behavior, CAPS relies on the measurement of emerging aggression, instead of focusing on mental health issues or ineffective, and often illegal, profiling. CAPS enables you to identify and distinguish between the "red-faced ready to explode" Primal Aggressor as well as the "very lethal," and too often missed, Cognitive Aggressor.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking  <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },


{title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT FOUR</Text>{"\n"}
  <Text style={styles.titleSub}>The Primal and Cognitive Aggression Continua, the Basis for the MEA</Text>
</Text>), explanation: (  <Text style={styles.info}><Text style={{ fontWeight: 'bold'}}>1. Primal Aggression Continuum</Text>{'\n'}

The Primal Aggression Continuum utilizes forces that are physiological (chemical and neurological) actions the body takes to preserve and protect itself (Natural Responses). The civility with which we treat one another in our day-to-day dealings is a veneer that masks those forces until we feel endangered or threatened, either physically, emotionally, intellectually (professionally) or spiritually. Then that most primal of human chemicals, adrenaline, kicks in naturally in mind and triggering the "fight or body, flight" mode/response. Initially these modes/responses are more subtle but grow in dynamics and influence as a potential aggressor progresses up this Aggression Continuum. It is important to note that often in the lower stages of the Primal Aggression Continuum, emerging aggression to the untrained eye is unseen. It is incumbent upon us to identify this early emerging aggression because aggression is easiest to diffuse in its earlier stages. As an aggressor approaches the Crisis Phase, Primal Aggression is usually described as an individual losing control and in the extreme what I like to call the "Red Faced Ready to Explode Guy;" whereas Cognitive Aggression is usually the aggression of a victimizer, predator and/or ultimately a terrorist (perpetrator of murder/suicide) who shows very little emotion or the effects of adrenaline.
{'\n\n'}<Text style={{fontWeight:'bold'}}>2.Cognitive Aggression Continuum</Text>{'\n'}Unlike primal aggression reactions, which are natural responses in the mind and body, the Cognitive Aggression Continuum describes deliberate and conscious behavior, usually manipulative in nature, to enable the aggressor to achieve and maintain an advantage over "victims" and over any individual who intervenes. Sometimes Cognitive Aggression can be non- conscious. Example: conscious behavior as a child becomes non- conscious behavior as an adult an individual repeats aggressive behavior so often that he no longer gives it much thought. This aggressive behavior becomes a habit and he becomes known as a vicious person.
{'\n\n'}Cognitive Aggression, often well planned and always insidious, is a far greater intellectual challenge for the Aggression Manager. Cognitive Aggressive behavior progresses through nine stages, which encompass the complete spectrum
of human intent-driven aggression.It has become clear that as an individual's aggression escalates,
their quality of judgment
diminishes. There can be a
progression of intent to harm that
occurs in the initial stages almost
unnoticed, even by the aggressor.
An individual who does not see
himself as "aggressive" but is
inconsiderate and/or patently
distrustful of others, become more
aggressive toward an individual(s)
as he escalates. Like the analysis of
the "Boiling Frog," without realizing
it, this aggressor progressively
becomes more aggressive to the
point where he is prepared to give
up his life for a cause sometimes
without realizing how very
aggressive he has become. When an individual moves away from a win/win solution and begins to harden his position on his issue versus your issues, he is beginning on a path of definable Cognitive Aggression. This course could ultimately result in "plunging together into the abyss," a culmination of violence to you, those in your care and even to the aggressor himself (Perpetrator of Murder/Suicide).
{'\n\n'}Cognitive Aggressors are typically
far more premeditated, deliberate and determined in their actions; making them potentially the most lethal of all aggressors! Perpetrators of Murder/Suicide (Terrorists), whether executed by a surrogate for ISIS, a worker returning to his workplace targeting supervisors, a love interest or fellow workers and then himself, or by a young man on his classmates and then himself, can transcend through the Cognitive Aggression Continuum and not yet perpetrate physical violence. Either his victim(s) is not yet available to him or he has not yet positioned his victim(s) for attack, however the indicators are present and can be identified. Murder/suicide events are on the rise. Often only noticed on local news, many events are not discussed on a national level, and many of us are often surprised to hear of such an event in our workplaces or neighborhoods.Learn more at our Educational Website, look for "The Primal and Cognitive Aggression Continua, the Basis for the MEA"
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT FIVE</Text>{"\n"}
  <Text style={styles.titleSub}>The Judious Interview</Text>
</Text>), explanation: (  <Text style={styles.info}>Because we are assessing humans, even objective measurable observables of body language, behavior and communication indicators, in themselves, are not always absolute. Thus, we developed the Judicious Interview! Once we have identified an aggressor on the Meter of Emerging Aggression, the goal of the Judicious Interview is to use Scientific Cause and Effect Principals to affirm whether this aggressor is a "person of interest." We accomplish this by asking specific questions or taking specific actions that produces a predicable response illustrating hostile or malicious intent.
  {'\n\n'}Unlike therapy, the initial goal of the Judicious Interview is not about forming a connection with the aggressor but to identify an aggressor and diffuse/prevent any aggressive act. Once an aggressor has been identified, building rapport and trust may be useful and applied to persuade the aggressor away from their path of violence, while they begin to regain their quality of judgment. The purpose of the Judicious Interview is to better understand the level of aggression and identify their mission or target and begin a diffusing/preventing process.
  {'\n\n'}Consider ways to get to the central question of intent, "Help me understand the intent behind your behavior." Or "Help me understand the intent meant by what you said?" Although we recommend that you ask directly about "intent," you may also put this in your own words such as, "What are you trying to accomplish by what you are doing?" or "Help me understand where your behavior and comments are heading?"
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT SIX</Text>{"\n"}
  <Text style={styles.titleSub}>SolutionPerson</Text>
</Text>), explanation: (  <Text style={styles.info}>If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to the men and women, as "SolutionPerson." Be SolutionPerson!
{'\n\n'}In my many seminars around the country, I tell the story of a top business executive I knew years ago. I asked him once what accounted for his success in dealing with so many challenges day after day. He smiled and told me that if he were to open his shirt, I would see a big red "S" on his chest, and it stood for "Solutionman!" His philosophy was to seek solutions, whatever that took not assign blame, nor take sides, nor make excuses, nor sit around complaining, but to solve problems. He refused to allow himself to become part of the problem, but only permitted himself to be part of the solution. He repeated the old saying that has very special meaning with Aggression Managers, "If you're not part of the solution, you are probably part of the problem."
{'\n\n'}I've thought about that over the years, and adopted his philosophy in my own career. Part of gaining trust is being perceived as one who seeks solutions. If you refuse to become part of the problem and only permit yourself to be part of the solution, more than likely you will say and do the right things to become what I now refer to, in deference to men and women, as "SolutionPerson."
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT SEVEN</Text>{"\n"}
  <Text style={styles.titleSub}>The Art Of Convincing</Text>
</Text>), explanation: (  <Text style={styles.info}>The Art of Convincing is getting someone to agree with you, because they believe it is good for them, preferably without them thinking it was your idea. The use of Pacing the Aggressor strategies with verbal and non-verbal techniques, and the effective use and reading of body language, all can lead to this result.
{'\n\n'}Are you sharing your opinion, or are you attempting to change behavior? Using a Socratic method, you can convince this aggressor away from his aggression, and if possible, have him think it was his idea. The Socratic Method is achieved through questions. Socrates asked questions that guided his subject to the answer he wished them to hear and learn. Through this method, he could convince his subject of his lesson and often his subject would think it was their idea.
{'\n\n'}Persuasion is not necessarily a gentle art, although it is best practiced as such at the outset of an aggressive incident. Many aggressors can indeed be artfully nudged out of their aggressive intent, while some require stronger persuasion. I like to characterize persuasion as "coming alongside" an aggressor, and then, using numerous persuasive Pacing the Aggressor skills, induce this individual to think your way while he is buying into the notion that it was his own idea. We will venture to share these techniques with you throughout this CAPS Education Website, and we will reference them in the CAPS Mobile App.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },


{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT EIGHT</Text>{"\n"}
  <Text style={styles.titleSub}>Scientifically-Reliable: Meter of Emerging Aggression (MEA)</Text>
</Text>), explanation: (  <Text style={styles.info}>The Meter of Emerging Aggression (MEA) is scientifically-reliable and thus it offers evidence-based Best Practices, and the opportunity to reliably prevent all forms of aggression from their outset through and including the most lethal form of violence, someone on the path to becoming a perpetrator of murder/suicide. Because our MEA represents the sequential precursors to each stage of aggressive behavior, it offers the opportunity to reliably prevent escalation of aggression, ultimately preventing violence.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT NINE</Text>{"\n"}
  <Text style={styles.titleSub}>Taking Responsibility for Yours Actions </Text>
</Text>), explanation: (  <Text style={styles.info}>As an Aggression Manager you must be able to say that you acted judiciously and to the best of your ability, under difficult circumstances, to diffuse this aggressor- and that you take full responsibility for your actions. No matter who initiated the aggressive behavior, you will be held responsible for your actions. You may only use "reasonable force" within an aggression moment. The problem is, what "reasonable force" is may ultimately be determined in a court of law, not in the aggression moment itself. It is our objective to provide you with the knowledge and skills, along with your professional judgment, to help make you, and those in your care, as safe as possible.
{'\n\n'}Be your own best advocate.
{'\n\n'}You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise.
{'\n\n'}We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
{'\n\n'}The CAPS responses are excellent templates to be used based upon your professional judgment, your understanding of this Emerging Aggressor, and the circumstances that you are in. Although we have found these responses extremely effective, we can make no warrants as to your effectiveness with a particular Emerging Aggressor. Only you know this individual and the circumstance that you are in, so you must use your professional judgment in applying any and all of these suggested template Best Practice 
responses.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT TEN</Text>{"\n"}
  <Text style={styles.titleSub}>Be your own best advocate</Text>
</Text>), explanation: (  <Text style={styles.info}>You should report any actions, events or statements that you believe put you or others at risk. Now you have the CAPS Mobile App to record and track this behavior. In the events that lead up to the aggression moment we often get signs and signals (precursors) that aggression could occur. These signs and signals can be found on the scientifically validated Meter of Emerging Aggression (MEA). When an incident occurs if there are no documented reports or efforts made to deal with this potential, everyone becomes at risk. You must be able to state to your company, your school, your parents or the reviewer that: "To the best of my ability, I acted judiciously to remove the possibility of threat." It is therefore in your own best interest to report all threats, veiled or otherwise. We will make every reasonable effort to educate you, as you prepare to approach an aggressor, but it is essential that you read everything on our Educational Website before engaging with an aggressor.
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT ELEVEN</Text>{"\n"}
  <Text style={styles.titleSub}>Four Key Elements in each Stage of Aggression</Text>
</Text>), explanation: (  <Text style={styles.info}>
  <Text style={{fontWeight:'bold'}}>Aggression Stage Introduction</Text>
  {'\n'}This is an introduction to each stage of aggression, which further describes and affirms your observations, plus three important perspectives:
  {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective One (What if you are the aggressor?)</Text>
  {'\n'}How should you respond if you are the aggressor? You may not think of yourself as an aggressor, you may be inadvertently responding to another's aggression. If you find yourself on this Meter of Emerging Aggression (MEA), what should you do? These insights may help you remove yourself from further escalation.
  {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Two (What if you are observing an aggressor?)</Text>
  {'\n'}How should you respond if you are observing an aggressor(s)? You will learn the insights and knowledge you can best use to diffuse the emerging aggressor, and prevent further escalation?
  {'\n\n'}<Text style={{fontWeight:'bold'}}> Perspective Three (What is the role of "trust?")</Text>
  {'\n'}How should you respond recognizing our "CAPS Trust Tenet:" If someone trusts us 100%, upon your request, they will move away from their aggression because they trust us 100%! In Perspective Three you will learn the importance of understanding the element of "trust" and its implications. Aggressive behavior undermines "trust!"
  {'\n\n'}Let's say you are the manager of a department that includes one hundred individuals, including supervisors and employees. How many of those individuals would you suspect to be loyal to you and your organization? 34! How many of those individuals would you estimate are headed out the door? 36!
  {'\n\n'}These findings from the Walker Loyalty Report for Loyalty in the Workplace states "just 34% of employees are staying while another 36% are about to walk. That leaves 30% who either haven't made up their minds or are just going with the flow". This Walker Report assesses loyalty five ways. Of these five elements, the single most important is "trust." Walker informs us that, "Trust, as the core culprit, is an operative driver." Realizing that, according to Walker, "only one third of the individuals are with you, therefore two-thirds are either on the fence or going against you;" if you wish to boost loyalty, leadership, teamwork and thus productivity then focusing on trust may be the leverage point, but until now it has been the most difficult to measure. With the Meter of Emerging Aggression, we can identify distrustful (aggressive) behavior and prevent it.
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT TWELEVE</Text>{"\n"}
  <Text style={styles.titleSub}>Every behavior begins with a thought</Text>
</Text>), explanation: (  <Text style={styles.info}>We can plant a constructive thought through visualization. Military, law enforcement and professional athletes use visualization often as an effective tool. They call it developing a "conditioned response." The notion that the mind serves as a kind of gatekeeper for emotional or aggressive' behavior is at the core of the cognitive theory of emotions. This cognitive appraisal activity is typically rapid. The question is, will these initial cognitive thoughts be a constructive or destructive thoughts? In the "Aggression Environment" they can quickly become negative and destructive! We can, and must, use visualization to plant constructive thoughts!
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT THIRTEEN</Text>{"\n"}
  <Text style={styles.titleSub}>Surviving the</Text>
</Text>), explanation: (  <Text style={styles.info}>The chances that you will find yourself face-to-face with an Active Shooter are quite slim, however, in our increasingly aggressive world should this occur, here are some important facts.
  {'\n\n'}The Moment of Commitment is "When a person decides to pull his weapon and begin shooting." According to Gavin deBecker in his book "Just 2 Seconds," the time between the Moment of Commitment and when the first round is discharged is just 2-seconds!
  {'\n\n'}Within the next horrific five seconds there will be victims: dead, dying and/or wounded! There are virtually no security or law enforcement teams that will reliably arrive within these first horrific five seconds. Regardless of how well trained, or equipped, security or law enforcement may be, they will arrive on scene stepping over those slain during those horrific first 5 seconds!
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
  </Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT FOURTEEN</Text>{"\n"}
  <Text style={styles.titleSub}>Controlling Your Adrenaline Rush with Cycle Breathing</Text>
</Text>), explanation: (  <Text style={styles.info}>Cycle Breathing is a method effectively in dire circumstances by the US Navy Seals. You consciously breathe in deeply through your nose, counting to four, hold to the count of two, exhale out through your mouth to the count of four and hold to the count of two. Again. And again. Practice Cycle Breathing as you drive into work, or as you return home, or as you put your head on the pillow at night. The worst place to practice Cycle Breathing is in front of an aggressor. Make Cycle Breathing yours, so that when you need it, it's available to you. You can also regain any lost quality of judgment, your creativity, innovation and thoughtful consideration by focusing on your heart region and, on the second or subsequent cycles of your Cycle Breathing, you slow your count cadence down and at the same time slow your heart rate down. Trust me - this works!
  {'\n\n'}Adrenaline in one adversary, i.e. "Emerging Aggressor," activates the adrenaline in you, preparing you for attack. Adrenaline is released into your bloodstream. Your heart accelerates, you feel perspiration, and your breathing patterns change. As adrenaline increases your heart rate, you begin to lose your ability to think creatively, innovatively and thoughtfully. Cycle Breathing begins to pay off. It relaxes your body, increases blood flow and essential oxygen to your brain, and counteracts the effects of adrenaline that cloud your own logical thinking.
  {'\n\n'}Per Redford Williams (1989) General Adaptation Syndrome (GAS) occurs which can virtually cause total suppression of cortical arousal, in other words, your effective thought process. You must consciously slow your heart rate down. As a Certified Aggression Manager, we will show you how to reverse the process, helping you regain critical lost skills and quality of judgment. To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT FIFTEEN</Text>{"\n"}
  <Text style={styles.titleSub}>Autocratic Versus Convincing</Text>
</Text>), explanation: (  <Text style={styles.info}>One of the most profound discoveries I made as explored Aggression Management was Autocratic versus Convincing. It has always been understood that persuasion was made up of two basic approaches: autocratic versus democratic.
{'\n\n'}In the world of aggression, "convincing persuasion" means causing the aggressor to go where you want him to go (away from their aggression) and have him believe that it is his idea. "Autocratic persuasion" means the use of an authoritarian or militarist manner. "Be here at 8:00 a.m. tomorrow morning." "Just say No!" "Just do it!" Democratic persuasion gives someone the opportunity and time to make their own decision.
{'\n\n'}If you are an Aggression Manager and your challenge is to persuade an aggressor away from an act of aggression, you do not have the luxury of allowing that aggressor to make up his own mind. He may choose an act of aggression. You must convince him that your suggestions are in his best interest.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },


{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT SIXTEEN</Text>{'\n'}
  <Text style={styles.titleSub}>Convince Rather Than Demand</Text> 
</Text>), explanation: (  <Text style={styles.info}>I have taken the "Convince rather than Demand" concept to employers, explaining that if they would invest the time to convince their employees rather than making autocratic demands, these employees would buy into their requests, and become self-motivated to accomplish their goals. Employers would not need to supervise and manage as closely; employees would become more productive; and the company would become more productive and profitable.
  {'/n/n'}I have taken this concept to schools, explaining that if teachers would invest the time to convince the students that understanding this knowledge was in their best interest rather than teaching, as some do, in a more pedantic way, students would buy in to the need for learning and would be self-motivated to learn and apply their education. Students would require less rote learning and supervision. Students who are involved in their learning are less aggressive. The learning environment between teacher and student would vastly improve and students would get higher achievement scores.
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },


{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT SEVENTEEN</Text>{"\n"}
  <Text style={styles.titleSub}>Assertive versus Aggressive Behavior</Text>
</Text>), explanation: (  <Text style={styles.info}>"Aggressive" behavior is always destructive and negative, while "assertive" behavior is always constructive and positive. Many misunderstand "aggressive" versus "assertive" behavior. "Assertive" behavior says, "I will win, because I will be the best that I can be!" Whereas, "aggressive" behavior says, "I will win, because I will take you out!" "Aggressive" behavior is always destructive and negative, whereas, if behavior is constructive and positive it is "assertive" behavior.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT EIGHTEEN</Text>{"\n"}
  <Text style={styles.titleSub}>CAPS Trust Tenets </Text>
</Text>), explanation: (  <Text style={styles.info}>Tenets are principles to believe in. Although with humans there are no absolute (100%) rules, these tenet principles are reliable:
{'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet One</Text>
{'\n\n'}If someone trusts you 100%, they will go and do whatever you wish (move away from aggressive behavior), because they trust you 100%. It is through your genuine and caring response and your developing or enhancing your trust relationship that you will enable this person to diffuse and regain their quality of judgment. It is also important to note that deception (lying) is the antithesis of trust.
{'\n\n'}Your most important persuasive strategy is to develop or enhance your "trust" relationship with this Emerging Aggressor, by finding things in common with this person and building upon these commonalities. From this, you will develop rapport and ultimately trust. We will expand on this very important tenet as it applies within each Aggression Stage.
{'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Two</Text>
{'\n\n'}People tend to do what they perceive as in their best interest! Your challenge is to convince this aggressor that your suggested constructive path is in their best interest, in doing so, you will engender trust. If done effectively, this will engender greater trust. We will expand on this very important tenet as it applies within each Aggression Stage.
{'\n\n'}<Text style={{fontWeight:'bold'}}>CAPS Trust Tenet Three</Text>
{'\n\n'}If you want to bring people together in trust, focus on their similarities, their commonalities. If you want to tear people apart, focus on their differences. We will expand on this very important tenet as it applies within each Aggression Stage.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },

{   title: ( <Text>
  <Text  style={{ fontSize: 20 }}>CONCEPT NINETEEN</Text>{"\n"}
  <Text style={styles.titleSub}>Documentation</Text>
</Text>), explanation: (  <Text style={styles.info}>CAPS Mobile App will give you the opportunity to document any aggressive behavior and share it with others. In doing so, you must consider the Rules of Evidence.
  {'\n\n'}Should you share your documentation with others? Each State may approach this a little differently, so check with a local attorney. Generally, the rule is: if you document an incident but you share it with no one and tell no one about its existence, that documentation is yours alone. On the other hand, if you document and share it with someone or tell someone else about its existence, then your documentation can be subpoenaed. If you intend to share your documentation with others, as we typically suggest that you do, make sure that it can hold up scrutiny.
  {'\n\n'}We recommend that you share your documentation with the person to whom you report. Why? Because this person may be able to help in a more effective way due to his or her position. Also, you are sharing the risk. You are putting them on notice, should further incidents occur.
  {'\n'}Introduction To CAPS
  {'\n'}1. Know what to document -
  {'\n'}The Meter of Emerging Aggression (MEA) uses no mental health assessment and, therefore, does not contravene HIPAA regulations. It does not use culture, gender, age, education, sexual orientation or position in a community, thus, it does not contravene most privacy regulations.
  {'\n\n'}You should document date, day, time, threat made, location, applicable conditions, injuries and property damage. Collect any evidence; you can take pictures, video and audio with your CAPS Mobile App and store it with a specific case.
  {'\n\n'}Realize that the individual who will review your documentation may possibly make judgments without you present. It is in your best interest to draw a picture for reviewers that helps take them through the steps that brought you to the conclusion that drove your trained and knowledgeable response.
  {'\n\n'}1.Interview all witnesses {'\n'}Don't miss anyone. Realize that these incidents can result in lawsuits that can generate millions of dollars in liability. If you have missed a witness your documentation and credibility will suffer for it.
  {'\n\n'}2.Avoid delay{'\n'}Act while memories are fresh. Delay can cause distortions. Be aware that your adrenaline rush can also create distortions. Many are following up initial witness interviews with another interview 24-hours later, once the effects of adrenaline may have worn off. Be aware that when a witness sees an unfamiliar shape or scene, they often automatically correct it to something they
   are familiar with.
  {'\n\n'}3. Be aware of Tachypsychia{'\n'}Distortion that occurs when your mind speeds up to cope with an aggressive moment (adrenaline rush) and it causes our perception of that event to seem as though it were in slow motion.
  {'\n\n'}4. Be aware of Tunnel Vision{'\n'}Our peripheral vision reduces to transfix on a threatening focal point causing us to miss critical information in our peripheral vision.
  {'\n\n'}5. Be aware of Auditory Exclusion{'\n'}The loss of hearing due to the adrenaline rush. Law enforcement officers have told me that they saw the gun, they saw the flare as the bullet was ejected through the gun barrel and they saw the window glass break behind them but they never heard the explosion discharged. as the bullet was discharged
  {'\n'} Your challenge is to see through the effects of the adrenaline rush and help the witnesses do the same.
  {'\n\n'}6. Be objective{'\n'}The opposite of subjective! Just the facts, please, not your opinion. Let those who review your report come to the same opinion that you have by offering the facts in a way that convinces them that you acted professionally and unbiased. The Meter of Emerging Aggression provides objective measurable enabling you to do so.
  {'\n\n'}7. Organize chronologically{'\n'}An effective way to bring a reviewer to your perspective is to recount everything as if writing a script, a storyline that a reviewer can easily follow.
  {'\n\n'}8. Tell the truth{'\n'}A single untruth, distortion or exaggeration can undermine your entire documentation. Remember someone may try to undermine your credibility. If a case goes to court it will not be weeks away, but years away.
  {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS),
     we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. 
</Text>), expanded: false },
















    
   
   
    // Add more items as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const scrollViewRef = useRef<ScrollView>(null);



  const expandItem = (item: Item) => {
    setItems(items.map(i =>
      i === item ? { ...i, expanded: !i.expanded } : i
    ));
  };

  const showAlert = (result: string, msg: string) => {
    Alert.alert(result, msg, [{ text: 'OK' }]);
  };

  const handleLogout = () => {
    setLogoutModalVisible(false);
    Alert.alert('Logged Out', 'You have been logged out.');
  };

  const handleLogoutCancel = () => {
    setLogoutModalVisible(false);
  };



  const handlePress = () => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to navigate to Contacts?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('Contacts'),
        },
      ],
      { cancelable: false }
    );
  };
  

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
          {/* <Text style={styles.headerTitle}>Back</Text> */}
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
      <View style={styles.logoi}>
        <Image source={require('../assets/img/CAPS_Logo.png')} style={styles.logoicon} /> 
      </View>
     
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/Title.png')} style={styles.clip} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Image
                source={require('../assets/img/right-arrow.png')}
                style={[item.expanded ? styles.arrowDown : styles.arrow , { tintColor: '#9d0808' }] }
              />
            </TouchableOpacity>
            {item.expanded && (
              <View style={styles.cardContent}>
                <Text style={styles.info}>{item.explanation}</Text>
              </View>
            )}
          </View>
          
          
        ))}
      </ScrollView>
      {showFooter && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('home')}>
            <Image source={require('../assets/img/home_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => Linking.openURL('tel:911')}>
            <Image source={require('../assets/img/call_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('SharegroupPage')}>
            <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('EditProfile')}>
            <Image source={require('../assets/img/edit_icon.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton} onPress={() => setLogoutModalVisible(true)}>
            <Image source={require('../assets/img/logout.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitles}>Logout</Text>
            <Text style={styles.modalText}>Are you sure you want to log out?</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogout}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleLogoutCancel}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: 15,
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: '#1E90FF', // Customize the color of the link
    textDecorationLine: 'underline',
  },
  link1: {
    color: '#b71c1c', // Customize the color of the link
    textDecorationLine: 'underline',
  },
  info: {
    marginTop:20,
    fontSize: 16,
    lineHeight: 25,
    color: '#666',
    textAlign:'justify'
  },
  backIcon: {
    width: 27,
    height: 27,
    padding: 10,
  tintColor: 'white'
  },
  scrollView: {
    paddingHorizontal: 16,
    
  },
  card: {
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 2,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    
  },
  cardHeader: {
    flexDirection: 'row',
    
   
    
  },
  clip: {
    marginVertical:5,
    width: 20,
    height: 24,
    tintColor: '#b71c1c',
    marginRight: 10,
    
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: 18,
    flex: 1,
  },
  arrow: {
    width: 15,
    height: 15,
    tintColor: '#b71c1c', // Arrow pointing up
  },
  arrowDown: {
    width: 15,
    height: 15,
    marginLeft: 'auto',
    transform: [{ rotate: '90deg' }], // Arrow pointing down
    
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

//   footer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
  footerText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
    fontWeight: '500',
    textAlign:'center',
    marginLeft:10,
    marginRight:10,
  },
  
  logoicon: {
    width: 100,
    height:100 ,
    marginHorizontal: 140,
    backgroundColor: 'white',
    top:10,
},
logoi: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', 
    
    
},
titlemain :{
     
},
titleSub: {
    fontSize: 14, // or your preferred smaller size
    color: 'gray', // optional, for styling the subtext differently
  },
  footer: {
    height: 60,
    backgroundColor: '#b71c1c',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  spacer: {
    height: 10, // Adjust the height for desired spacing
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color:'black',

  },
  modalText: {
    fontSize: 16,
    marginBottom: 15,
    color: 'black',

  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  ptext: {
    fontSize: 16,
    marginBottom: 20,
   
    textAlign: 'center',
    

  },
});

export default IntrductionPage;

