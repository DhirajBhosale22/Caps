// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// interface Item {
//   title: string;
//   explanation: React.ReactNode;
//   expanded: boolean;
// }

// const AggressionStageFourScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const [items, setItems] = useState<Item[]>([
//     {
//       title: ( <Text>
//         <Text  style={{ fontSize: 20 }}>Introduction</Text>{"\n"}
//         <Text style={styles.titleSub}>Stage Four Introduction</Text>
//       </Text>), explanation: (  <Text style={styles.info}> 
//         {'\n\n'}<Text style={styles.bold}>Cognitive (Intent-driven) Aggression:</Text>At stage four, the Emerging Aggressor typically has a targeted victim in his sights. Yet, this aggressor is not yet prepared to go face-to-face with his victim; that would be too daunting. He will work behind the scenes to undermine the relationship the victim has with his or her own community (Community is defined as those people that the victim likes, loves and respects and with whom the victim wishes to receive like, love and respect in return).
//       {'\n\n'} <Text style={styles.info}>We observe what we call, "Planting the seed of distrust:" in every institutions and organizations that we visit. 
//       </Text>
      
//       {'\n\n'}This Emerging Aggressor verbally attacks his victim's core identities, in an attempt to turn the victim's community against his victim with malicious intent,and to covertly undermine the victim's trust relationship with his or her own community.
//       {'\n\n'}This Emerging Aggressor demonstrates deniable punishment behavior (described as punishing his victim in a way that he can later deny if discovered).
//       {'\n\n'}Issues become bipolar and he attacks the victim's core identities. This Emerging Aggressor will often frame destructive criticism towards others in a way with sarcasm and humor so later he can deny harmful intent. "Oh, come on, I was just kidding!"
//       {'\n\n'}<Text style={styles.bold}>Primal (adrenaline-driven) Aggression: </Text> We observe heightened anxiety by this Emerging Aggressor resulting in eyes darting, meaning he wishes to identify an escape route. With these Fourth Stage aggressors, issues have become polarized, and can appear like there is no middle ground.
//       {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//       </Text>), expanded: false
//     },
//     {  title: ( <Text>
//       <Text  style={{ fontSize: 20 }}>Prespective One</Text>{"\n"}
//       <Text style={styles.titleSub}>What if you are the aggressor?</Text>
//     </Text>), explanation: (  <Text style={styles.info}>{'\n\n'}
//       How should you respond if you are the aggressor? Here are some suggestions:
//     {'\n\n'} <Text style={styles.bold}>Planting the Seed of Distrust with a Victim's Community</Text>
//     {'\n'} It is your objective to turn this body of "friends" or community against your victim? If you go to the victim's community and say: "You know Jane. I don't know if I can still trust her. I don't know why; I just don't feel comfortable around her anymore." You have just planted the seed of distrust. This insidious seed will grow like weeds in a garden. By your acknowledgement that you are Planting the Seed of Distrust, this acknowledgement alone, should be enough to move you against this initiative.
//     {'\n\n'}"Community" is made up of those individuals with whom the victim wants to be seen. These are the individuals that your victim likes/loves and/or respects;and with whom your victim wants to be liked/loved and/or respected in return.
//     {'\n\n'}Typically, partial truth can be far more detrimental than complete truth and this seed of distrust is outright Cognitive Aggression at its fourth stage. This kind of behavior is commonplace throughout every workplace and is not typically seen as "aggressive."
//     {'\n\n'}better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//      </Text>), expanded: false },

//     {   title: ( <Text>
//       <Text  style={{ fontSize: 20 }}>Prespective Two</Text>{"\n"}
//       <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
//     </Text>), explanation: (  <Text style={styles.info}>How should you respond if you are observing another or others that are aggressive? Here are some suggestions: To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
//       {/* {'\n\n'}How should you respond if you are observing another or others that are aggressive? Here are some suggestions: To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking CAPS Training, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. */}
//       {'\n\n'}<Text style={styles.bold}>Understanding "planting a seed of distrust":</Text>Planting a seed of distrust is outright Cognitive Aggression at the fourth stage in the Escalation Phase; a technique used throughout our world, possibly because people do not know how aggressive it is. It is not instinctual for one human to attack another. Therefore, once people realize that this is overt aggressive behavior, they tend to move away from it. Another method is to combat these partial truths with complete transparency.
//       {'\n\n'}<Text style={styles.bold}>Paraphrasing and "Parrot- Phrasing":</Text>Paraphrasing and "Parrot- Phrasing" are excellent tools to engage effectively by expressing empathy with an aggressor. Paraphrasing uses tone of voice and body language to change the aggressor's intent.
//       {'\n\n'}One challenge an Aggression Manager might experience is to take control of an aggressor's conversation. Often an aggressor feels the need to dominate a conversation with their perspective. What should you do?
//       {'\n\n'}People like nothing better than to hear someone else repeat what they themselves have said. It is as if the playback of a statement by another lends its credibility, memorializes it, gives it more import - and by implication boosts the importance of its author. This is also true with the aggressor who makes a threat or any statement in the heat of anger or frustration, or as a tactic to back a co-worker, or the Aggression Manager, down a notch. As a trained Aggression Manager, however, you have a defensive tactic of your own. You can use the repetition of the aggressor's statement, however irresponsible or off-the-wall, as an effective defensive countermeasure - with Paraphrasing or with "Parrot- Phrasing."
//       {'\n\n'}With both techniques, you have the aggressor's attention because he is listening to his own words. And as long as he is listening, you have control. Just as important, when you thoughtfully repeat his words, whether they're a threat or a statement of his demands, you create empathy.
//       {'\n\n'}When you "parrot-phrase," repeating his words using the same tone, you come across as a person who cares and respects enough about what the aggressor has stated to repeat it, to make sure you understood it. "Let me see if I understand what you've said, Sam. You want us to let you keep your job, transfer you to shipping and give you Thursday afternoons off. Is that what you said?"
//       {'\n\n'}Paraphrasing has an additional objective. In addition to repeating the aggressor's words, it uses tone of voice and body language to change intent. Experts in behavioral science tell us that words themselves only convey 7% of a social communication. Tone of voice carries 38% of a communication, and body language 55%. Therefore, tone of voice and body language are 13 times more important than the words themselves! That means every utterance from "What are you doing here?" to "I can't wait to see Aunt Sally" can mean many things depending on tone of voice and body language. It is also important to note that, when body language and words clash, the aggressor will typically rely on your body language for his interpretation. Whether establishing credibility, making an initial impression, or building a bridge of trust, your body language will have the greatest impact.
//       {'\n\n'}<Text style={styles.bold}>Higher Priority Values:</Text>Most individuals,including aggressors, place a high priority in one or more elements of their lives. As we probe for these high priority values, we know they fall into five categories:
//       {'\n\n'}<Text style={styles.bold}>The Value of Time:</Text>Time is a precious commodity.Time is a precious commodity. In our culture, we think of time as a sort of currency that we "spend," "invest," or "waste." We say, "Time is money," and "Time is precious." Part of its value is that we have a limited amount of it, and become impatient about using what we do have unwisely. Ask the aggressor if he has thought about how much time he is going to lose if he goes through with his threat or doesn't end the incident he has begun. The ultimate loss of time, of course, is months or even years in prison. You need to emphasize this possibility up front. At the very least, he may have to spend hours talking to looking for another job or just waiting to hear the outcome of his actions. "Sam, have you got time for all the hassle you may be creating? You're going to be wasting a lot of time, and if you're like me, you don't have a lot of time in your day to waste. But it's up to you."
//       {'\n\n'}<Text style={styles.bold}>The Value of Money:</Text> Even if he feels he is justified in his actions, the aggressor faces attorney's fees, investigation costs and other expenses he can't even anticipate and certainly can't afford. At the same time, he may lose his source of income, and have a difficult time finding another job that pays enough to meet his living expenses. "Sam, how are you going to support your family if you lose this job? What about payments on that truck you bought last month? And, of course, you'd lose your medical insurance. Is this worth losing all that?"
//       {'\n\n'}<Text style={styles.bold}>The Value of Job:</Text> Almost everyone who has a job enjoys the prestige of having that job, and has also felt the anxiety of not having one. A job contributes not only income, a sense of self-worth and dignity, but security and peace of mind. A job with some problems is better than no job. "Sam, you've got a good job here. How long would it take to find another one that pays this well?"
//       {'\n\n'}<Text style={styles.bold}>The Value of Record:</Text> Beyond the job itself, most individuals place a high value on the record they've achieved. For many, the stress of continuing high performance or frustration and anger at not being recognized for that record of performance is what pushes them toward aggression. Appeal to their pride in their record, and to their sense of professionalism, which is a genuine source of dianity "Sam you've been here source of dignity. "Sam, you've been here for 15 years. You've got an excellent record, and even if you don't think you've been treated fairly, you don't want to spoil that record with one incident like this."
//       {'\n\n'}There is a dark side to one's record to consider as well - a criminal record. A survey from the Society for Human Resources Management (SHRM) found only 2% of workplace aggressors who perpetrate violence have a criminal record. For the clear majority of aggressors, the possibility of a criminal record would certainly be significant incentive to end the incident.
//       {'\n\n'}<Text style={styles.bold}>The Value of Family/Mate:</Text> Few individuals want to let their families down. Love and loyalty are strong values regardless of the makeup of the household. Few are indifferent about "letting the kids down" or putting the family in financial jeopardy. "Sam, what's your wife going to think? What about your daughter. She really looks up to you."
//       {'\n\n'}Ask questions that help you ascertain which values the aggressor holds in highest priority, then show him how his actions are threatening those values. Because you don't really know which of these values, or which combination, is likely to impact the aggressor's thinking, you need to wrap them all up into one summation of possibilities by applying all the higher priority values at once:
//       {'\n\n'}<Text style={styles.bold}>Applying all the Higher Priority Values at Once:</Text>Aggressors don't care what you know; they only want to know that you care. By applying all of the High Priority Values in one statement, you illustrate that you care enough to make the best case for a constructive resolution of issues.
//       {'\n\n'}"Sam, if you really did try to hurt Johnson, or actually did hurt him":
//       {'\n\n'}"The Law might see it as attempted murder! You'd have a criminal record."
//       {'\n\n'}"We'd have no choice, you'd lose your job, your health insurance."
//       {'\n\n'}"How would you be seen by your co- workers, as a fair-minded guy?"
//       {'\n\n'}"What would your wife and daughter think then?"
//       {'\n\n'}<Text style={styles.bold}>Need Clarity? Write it Down:</Text>If you have an aggressor losing his quality of judgment, an excellent technique is asking him to write all the details down. This offers many advantages. First, it takes the aggressor from his emotional right brain hemisphere to his analytical left brain hemisphere, giving him a clearer picture with which to make lucid decisions that require high quality of judgment. The very act of structuring words, phrases and paragraphs disciplines us to be more structured in our thought process, helping us de- escalate and regain our quality of judgment.
//       {'\n\n'}<Text style={styles.bold}>Determining the Crux of the Matter:</Text>At the outset, as you work to gain the trust of an aggressor, you need to be sizing up the individual. So, ask yourself several questions:
//       {'\n\n'}Where is he coming from? How did he get to these circumstances? What is his agenda?
//       {'\n\n'}What has he got to gain if he continues on this aggressive path? What has he got to gain if he follows my path?
//       {'\n\n'}What has he got to lose if he continues on this aggressive path? What has he got to lose if he follows my path?
//       {'\n\n'}How can I use the answers to the first three questions to dissuade him from continuing his aggressive course?
//       {'\n\n'}The answers to the Crux of the Matter questions can be determined by asking the aggressor the right kind of questions. You can ask six types of questions, some good, some not so good:
//       {'\n\n'}<Text style={styles.bold}>Types of Questions and Their Use:</Text>
//       {'\n\n'}<Text style={styles.bold}>Open-ended Questions - Good:</Text>The ultimate of persuasion is when an aggressor believes you understand his issue and thereby can be trusted with his issue. To properly understand his issue, you must get this aggressor to open-up and give you information from his perspective. An open question is any that requires him to explain or expound on an issue that is on his mind. These are typically "What," "Why" and "When" questions that draw him out from behind his wall of anger or frustration. "What" or "Why" question might be inflammatory when referring to the aggressor or his actions. If possible, use a "When" question that deflects blame and may sound less judgmental. "Sam, when did you begin feeling anxious about this issue?"
//       {'\n\n'}<Text style={styles.bold}>Closed-ended Questions - Not good:</Text> These are any questions that the aggressor can answer with a simple "Yes" or "No." They allow him to stay behind the wall, and are counterproductive to your objective of getting to the Crux of the Matter. "This isn't the way to solve your problem, is it?" "Sam, are you so unhappy here that you'd threaten someone?"
//       {'\n\n'}<Text style={styles.bold}>Probing Questions - Good:</Text> These questions are often follow-ups to your initial Open Questions, in that they delve deeper into an issue after it has been exposed by the aggressor. Probing questions are also Open Questions. "Sam, how do you think you could have handled your frustration without hurting Louise's feelings?"
//       {'\n\n'}<Text style={styles.bold}>Leading Questions - Not good:</Text> Leading Questions are good only after you have determined the Crux of the Matter. Before this, you will only be confirming your own opinion, not necessarily getting to the actual Crux of the Matter for this Emerging Aggressor. After you believe you've reached the Crux of the Matter, confirm your conclusion in the form of a Leading Question. "So, Sam, if I understand what you've been saying, the real issue here is your resentment that after 16 years of service in the company, promotions are going to younger people. Isn't that correct?"
//       {'\n\n'}<Text style={styles.bold}>Loaded Questions - Never good:</Text> Never ask Loaded Questions, because they incriminate or belittle the aggressor, force him to admit he is at fault or even insult him. This causes the loss of that critical persuasive element of "trust." "Sam, isn't this the dumbest thing you've ever done?" Again, such a question would undermine your pursuit of the Crux of the Matter, losing any form of "trust" you may have otherwise developed, and probably end your ability to persuade this aggressor away from his aggression.
//       {'\n\n'}<Text style={styles.bold}>Power of Silence - Good:</Text> Just as important as the type of question you ask is what you do after asking the question. You shut up! Remember that your task is to draw information out of the aggressor, not keep him quiet by doing all the talking yourself. The individual has used aggressive actions to make a statement he perhaps could not make verbally, or that no one seemed interested in hearing. You demonstrate your interest by listening.
//       {'\n\n'}<Text style={styles.bold}>That brings us to the Power of Silence:</Text> During an aggressive situation, the aggressor may want to talk. So, when you ask him a question, be silent and let him fully complete his answer. And after he has finished his initial answer, you may feel he has more to say, so remain quiet. Let silence work. He may have the urge to fill it with more information you need to bring the incident to a successful close.
//       {'\n\n'}Your skillful use of Open and Probing questions and silence should give you some answers about what is really going on in the aggressor's mind, what is important to him and what he values. Once you have this information, you have key leverage to use in further discussion.


//       </Text>), expanded: false },

// {   title: ( <Text>
//   <Text  style={{ fontSize: 20 }}>Prespective Three</Text>{"\n"}
//   <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
// </Text>), explanation: (  <Text style={styles.info}>{'\n\n'}
//   <Text style={styles.bold}>1. CAPS Trust Tenet</Text>
// {'\n\n'}<Text style={styles.bold}>Explained: </Text>Persuasive Tactics, if conveyed with a genuine and caring tone, instills Trust! Persuasive Tactics are designed to convince an aggressor away from their current aggressive path to a more constructive path without the aggressor realizing they are being persuaded. Aggressors' tend to respond to these Persuasive Tactics by engendering rapport and ultimately trust. If we are to be Aggression Managers, we must be able to use these Persuasive Tactics as effective offense, or defensive, as we recognize and respond appropriately in the heat of an incident of aggression. The following are Persuasion Tactics we have developed over the years. The utilization of these mental short cuts enables us to quickly process and employ these tactics to move an aggressor to a more constructive path.
// {'\n\n'}<Text style={styles.bold}>Persuasive Tactic Described:</Text> We live with the blessings, and the curse, of the Information Internet Age. Our world is awash with information, much of it extraneous. In order for us to function effectively, our minds create short cuts to process the flood of input our minds receive each day. In today's computer & smartphone- conscious times, we could call this "default thinking."
// {'\n\n'} It's dinnertime. The phone rings. I answer and a voice says, "Good evening, is this Dr. John Byrnes (usually mispronounced)? How are you this evening?" Instant default thinking cuts to a conclusion: This is a sales pitch Isave both our time by responding, "Thanks, but I'm not interested," and hang up.
// {'\n\n'}These short cuts can trigger either a positive or a negative response to a communication - negative in the case of the phone solicitor - especially a spoken message by one person meant to influence the thinking of another, or to persuade him to reconsider his opinion on an issue.
// {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
//       onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
// {'\n\n'}<Text style={styles.bold}>1. Persuasive Tactic of the Limited Offer</Text>
// {'\n\n'}When an individual perceives that something he might want is limited in quantity, he often believes that its value is greater than if it were available in abundance.
// {'\n'}The harder something is to acquire, the greater the value we place on its attainment. No urgency, no scarcity, often produces no desire.
// {'\n'}Make what you are offering rare and hard to find, and you instantly bincrease its value.
// {'\n'}A Suggested Tactical Statement: "Sam, you have worked hard to gain this important position, you may never have an opportunity like this again, why take the risk of losing it?"
// {'\n'}<Text style={styles.bold}>2. Persuasive Tactic of Reciprocity</Text>
// {'\n\n'}When someone gives you something of perceived value, you immediately respond with the desire to give something back, often something of greater value.
// {'\n\n'}People dislike the feeling of "owing."
// {'\n\n'}Beware of free offerings, they can involve either a trick or a hidden obligation.
// {'\n\n'}A Suggested Tactical Statement:
// {'\n\n'}"I really don't have time for you today, but I am going to make an exception for you because I believe your issue is important." What do I want in return? His co-operation.
// {'\n\n\n'}<Text style={styles.bold}>3. Persuasive Tactic of Creating Expectation</Text>
// {'\n\n'}Our expectations of ourselves and others play a powerful role in how we digest information and how we perform.
// {'\n\n'}When someone, whom you believe in or respect, expects you to perform a task or act in a certain way, you will tend to fulfill his expectation whether positive or negative.
// {'\n\n'}"Positive Expectations" is one of the four key ingredients of hardiness asit relates to psychoneuroimmunology. N. Cousins, (1989) Head First: The Biology of Hope.
// {'\n\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>
// {'\n\n'}"Stick with me, I'll make us both winners."
// {'\n\n'}"I know I can count on you. I know that you can do it!"
// {'\n\n'}<Text style={styles.bold}>4.Persuasive Tactic of Contrast</Text>
// {'\n'}When two items are relatively different from each other, we will see them as more different if placed in close proximity of each other, either in time or space. A Suggested Tactical Statement: If you want something to contrast starkly, show or share them together. Bring up both issues together with a genuine and caring tone: "Sam, you can enjoy watching your daughter grow up every day - or you can face the possibility of years in jail away from her. It's your choice."
// {'\n'}If you want to diminish the differences between two issues, share them further apart. Show one today and the other a week from today. "Sam, I haven't mentioned it before, but I think you'd prefer being a free man, with no criminal record, and be able to watch your daughter grow up every day. I know I would."
// {'\n\n'}<Text style={styles.bold}>5. Persuasive Tactic of Projected Thinking</Text>
// {'\n'}Our mind perceives what it is conditioned to perceive. In "Controllin Options" learn how we can condition our aggressor to choose options we create People see and hear exactly what they expect to see and hear, even if it differs from their actual perception. They project their views on reality so that reality changes to become what they project.
// {'\n'}<Text style={styles.italic}>A Suggested Tactical Statement: </Text>
// {'\n'}In 2000, in Florida, all Presidential ballots were recounted. The question as to what represented a vote or no vote had a great deal to do with your political affiliation:
// {'\n'}"It's perfectly clear. This ballot is valid because we can see from the dimpled chad who the voter intended to vote for."
// {'\n\n'}"It's perfectly clear. This ballot is invalid, because the voter did not punch a hole through the indicated area in accordance with clearly visible instructions."
// {'\n\n'}<Text style={styles.bold}>6. Persuasive Tactic of Continuity</Text> Aggressors tend to react in a way that is consistent with what they perceive as truth and is a continuation of their current perspective. If you begin your persuasion from what the aggressor perceives as truth, he will more readily accept and respond to your persuasion. An example of this is a story that educator John Holt tells of visiting an elementary school and observing a geography lesson. The fifth-grade teacher was pointing to a wall map of the United States and was asking the students questions dealing with points of the compass. Holt, on a hunch, asked if the might ask a question. He approached the wall map, removed it, and laid it flat on the floor. He then asked the students, "Which way is north?" All the students pointed toward the ceiling!
// {'\n'}If you illustrate a pattern of behavior, it is assumed that you will continue that behavior. Predictability gives people a sense of control and, they expect and desire it. Behavior that seems to have no continuity or purpose will keep humans off-balance and cause increasing consternation. As a point of beginning, identify what your aggressor's predispositions are and build your persuasion from them.
// {'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>"You remember when I helped Jack work through a similar issue. I can do the same for you, if you will let me.
// {'\n\n'}<Text style={styles.bold}>7. Persuasive Tactic of Acceptance by Association</Text>
// {'\n'}We agree with those whom we respect; we listen to those whom we like. People tend to accept opinions or ideas endorsed by others that they trust or admire.
// {'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>"You don't have to take my word, Sam Ack your friends at work Sam. Ask your friends at work, those you trust, how I've always supported them - just like I want to help you now."
// {'\n'}<Text style={styles.bold}>8. Persuasive Tactic of Infectious Emotions and Attitudes</Text> Emotions and attitudes are infectious: anger, panic, fear, calm, positive, negative, solution oriented (SolutionPerson) are all contagious. If your attitude is "I'm Dead!" what result will this produce? We hear that the emotion "panic" is contagious, but did you realize that "Calm" is also contagious! Use Cycle Breathing to control and maintain your calm.
// {'\n\n'}<Text style={styles.bold}>9. Persuasive Tactic of Reducing Isolation</Text>
// {'\n'}If you see someone beginning to isolate themselves, encourage them to rely on the network of friends.
// {'\n'}Humans are social creatures by nature. They crave contact with others.
// {'\n'}In moments of uncertainty and danger, you need to resist the desire to isolate yourself you need to seek out friends, old and new, to come to your aid.
// {'\n'}Isolationism can soon become a prison.
// {'\n'}If you see someone beginning to isolate themselves, encourage them rely on the network of friends.

// {'\n\n'}<Text style={styles.bold}>10. Persuasive Tactic of Fears </Text>By focusing on those things which cause us anguish and anxiety we give that anguish and anxiety power. We must be aware of those things that cause us anxiety.However, we must focus on those things that produce solutions SolutionPerson. We tell bank tellers and other potential victims of armedrobbery, never focus on the weapon, because you put the weapon in charge. When we dwell on a petty problem, we give it existence and credibility.Most all people are motivated toward pleasure and away from pain.People are more motivated by the fear of pain than the desire to seek pleasure.
// {'\n\n'}<Text style={styles.bold}> 11. Persuasive Tactic of Friends</Text> It is important to be perceived as a friend (someone you like and who engenders trust) if you are to be successful in the persuasion process, because, when someone you like and trust asks you to do something, you want to do it.
// {'\n\n'}<Text style={styles.bold}>12. Persuasive Tactic of Expanding on Perspective</Text>
// {'\n'}An Aggression Manager may find it more effective to convince an aggressor that he is not an aggressor, than it is to convince him to not act aggressively.
// {'\n'}When an individual announces in writing or verbally that he is taking a position on any issue or point of view, he will strongly tend to defend that belief regardless of its accuracy even in the face of overwhelming evidence to the contrary. "Once you are a hammer, everything looks like a nail."
// {'\n'}Abraham Maslow Thus, you will have better results if you convince an aggressor that he is not an aggressor, rather than attempt to convince him to not act aggressively.
// {'\n\n'}<Text style={styles.bold}>13. Persuasive Tactic of Peer Conformity</Text> People tend to agree to ideas or proposals they perceive as acceptable to the majority of others in their peer group.
// {'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>
// {'\n\n'} "Sam, I'm sure you're proud that your work team has a record of zero claimsover the last five years. And everyone is working so hard to continue this excellent record."
// {'\n\n'}<Text style={styles.bold}>14. Persuasive Tactic of Power</Text> People exercise power over other people to the degree that those exercising power are perceived as having greater authority, strength or expertise.
// {'\n'}Unfortunately, many people who are perceived as having power or strengthbecause they threaten the use of aggression to get what they want. As an Aggression Manager, recognize this "play for power" and don't let it influence your thoughts or actions.
// {'\n\n'}<Text style={styles.bold}>15. Persuasive Tactic of Using Words with Power</Text>
// {'\n'}Use of an individual's name, preferably their first name is a powerful attention getter.
// {'\n\n'}Using "Please" and "Thank You" tends to motivate people and make them feel respected.
// {'\n\n'}Frame your words in the positive avoid "Don't": People often cannot make a picture of the word "don't" in their minds, because it is not a noun.
// {'\n'}What is stated as a negative may be heard in the brain as a positive;the opposite of your intention.
// {'\n\n'}<Text style={styles.italic}>A Suggested Tactical Statement: Be careful of the effects of the following statements:</Text>
// {'\n\n'} "Don't feel as though you have to buy something today." This may be heard as, "Buy today."

// </Text>), expanded: false },

//   ]);

//   const scrollViewRef = useRef<ScrollView>(null);
//   const expandItem = (item: Item) => {
//     setItems(items.map(i =>
//       i === item ? { ...i, expanded: !i.expanded } : i
//     ));
//   };

//   const showAlert = (result: string, msg: string) => {
//     Alert.alert(result, msg, [{ text: 'OK' }]);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
//       <View style={styles.header}>
//       <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
//           <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Introduction To CAPS</Text>
//       </View>
//       <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
//       <View style={styles.logoi}>
        
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
//       <Image source={require('../assets/img/Profile-icon.png')} style={styles.footerIcon} />
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
//   info: {
//     marginTop:20,
//     fontSize: 16,
//     lineHeight: 25,
//     color: '#666',
//     textAlign:'justify'
//   },
//   bold:{
//     fontWeight:'bold'
//   },
//   italic:{
//     fontStyle:'italic'
//   },
//   backIcon: {
//     width: 25,
//     height: 25,
//     padding: 10,
//   tintColor: '#fff'
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
//     alignItems: 'center',
   
    
//   },
//   clip: {
//     width: 20,
//     height: 20,
//     tintColor: '#b71c1c',
//     resizeMode: 'contain',
//     marginLeft: 15,
//     marginRight: 10,
//     marginBottom:20
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

//   footer: {
//     padding: 10,
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   footerText: {
//     fontSize: 14,
//     color: 'black',
//     marginBottom: 10,
//     fontWeight: '500',
//     textAlign:'center',
//     marginLeft:10,
//     marginRight:10,
//   },
//   registrationButton: {
//     backgroundColor: '#9d0808', // Customize the background color of the button
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   registrationButtonText: {
//     color: 'white',
//     fontSize: 18,
  
//   },
//   logoicon: {
//     width: 100,
//     height:100 ,
//     marginHorizontal: 140,
//     backgroundColor: 'white',
// },
// // logoi: {
// //     flex:1,
// //     justifyContent: 'center',
// //     alignItems: 'center',    
// // },
// titleSub: {
//     fontSize: 14, // or your preferred smaller size
//     color: 'gray', // optional, for styling the subtext differently
//   },

//   footer: {
//     height: 60,
//     backgroundColor: '#9d0808',
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
// });

// export default AggressionStageFourScreen;
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert, StatusBar, Linking,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Item {
  title: string;
  explanation: React.ReactNode;
  expanded: boolean;
}

const AggressionStageFourScreen: React.FC = () => {
  
  const navigation = useNavigation();
  const [showFooter, setShowFooter] = useState(true);
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      title: ( <View>
        <Text  style={{ fontSize: wp('6.3%'), fontWeight: 'bold',color:'black' }}>Introduction</Text>
        <Text style={styles.titleSub}>Stage Four Introduction</Text>
        </View>), explanation: (  <Text style={styles.info}> 
        {'\n\n'}<Text style={styles.bold}>Cognitive (Intent-driven) Aggression:</Text>At stage four, the Emerging Aggressor typically has a targeted victim in his sights. Yet, this aggressor is not yet prepared to go face-to-face with his victim; that would be too daunting. He will work behind the scenes to undermine the relationship the victim has with his or her own community (Community is defined as those people that the victim likes, loves and respects and with whom the victim wishes to receive like, love and respect in return).
      {'\n\n'} <Text style={styles.info}>We observe what we call, "Planting the seed of distrust:" in every institutions and organizations that we visit. 
      </Text>
      
      {'\n\n'}This Emerging Aggressor verbally attacks his victim's core identities, in an attempt to turn the victim's community against his victim with malicious intent,and to covertly undermine the victim's trust relationship with his or her own community.
      {'\n\n'}This Emerging Aggressor demonstrates deniable punishment behavior (described as punishing his victim in a way that he can later deny if discovered).
      {'\n\n'}Issues become bipolar and he attacks the victim's core identities. This Emerging Aggressor will often frame destructive criticism towards others in a way with sarcasm and humor so later he can deny harmful intent. "Oh, come on, I was just kidding!"
      {'\n\n'}<Text style={styles.bold}>Primal (adrenaline-driven) Aggression: </Text> We observe heightened anxiety by this Emerging Aggressor resulting in eyes darting, meaning he wishes to identify an escape route. With these Fourth Stage aggressors, issues have become polarized, and can appear like there is no middle ground.
      {'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
      </Text>), expanded: false
    },
    {  title: (  <View>
      <Text  style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black' }}>Prespective One</Text>
      <Text style={styles.titleSub}>What if you are the aggressor?</Text>
      </View>), explanation: (  <Text style={styles.info}>{'\n\n'}
      How should you respond if you are the aggressor? Here are some suggestions:
    {'\n\n'} <Text style={styles.bold}>Planting the Seed of Distrust with a Victim's Community</Text>
    {'\n'} It is your objective to turn this body of "friends" or community against your victim? If you go to the victim's community and say: "You know Jane. I don't know if I can still trust her. I don't know why; I just don't feel comfortable around her anymore." You have just planted the seed of distrust. This insidious seed will grow like weeds in a garden. By your acknowledgement that you are Planting the Seed of Distrust, this acknowledgement alone, should be enough to move you against this initiative.
    {'\n\n'}"Community" is made up of those individuals with whom the victim wants to be seen. These are the individuals that your victim likes/loves and/or respects;and with whom your victim wants to be liked/loved and/or respected in return.
    {'\n\n'}Typically, partial truth can be far more detrimental than complete truth and this seed of distrust is outright Cognitive Aggression at its fourth stage. This kind of behavior is commonplace throughout every workplace and is not typically seen as "aggressive."
    {'\n\n'}better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking<Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
     </Text>), expanded: false },

    {   title: (  <View>
      <Text  style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black' }}>Prespective Two</Text>
      <Text style={styles.titleSub}>What if you are observing an aggressor?</Text>
      </View>), explanation: (  <Text style={styles.info}>How should you respond if you are observing another or others that are aggressive? Here are some suggestions: To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
      {/* {'\n\n'}How should you respond if you are observing another or others that are aggressive? Here are some suggestions: To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking CAPS Training, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops. */}
      {'\n\n'}<Text style={styles.bold}>Understanding "planting a seed of distrust":</Text>Planting a seed of distrust is outright Cognitive Aggression at the fourth stage in the Escalation Phase; a technique used throughout our world, possibly because people do not know how aggressive it is. It is not instinctual for one human to attack another. Therefore, once people realize that this is overt aggressive behavior, they tend to move away from it. Another method is to combat these partial truths with complete transparency.
      {'\n\n'}<Text style={styles.bold}>Paraphrasing and "Parrot- Phrasing":</Text>Paraphrasing and "Parrot- Phrasing" are excellent tools to engage effectively by expressing empathy with an aggressor. Paraphrasing uses tone of voice and body language to change the aggressor's intent.
      {'\n\n'}One challenge an Aggression Manager might experience is to take control of an aggressor's conversation. Often an aggressor feels the need to dominate a conversation with their perspective. What should you do?
      {'\n\n'}People like nothing better than to hear someone else repeat what they themselves have said. It is as if the playback of a statement by another lends its credibility, memorializes it, gives it more import - and by implication boosts the importance of its author. This is also true with the aggressor who makes a threat or any statement in the heat of anger or frustration, or as a tactic to back a co-worker, or the Aggression Manager, down a notch. As a trained Aggression Manager, however, you have a defensive tactic of your own. You can use the repetition of the aggressor's statement, however irresponsible or off-the-wall, as an effective defensive countermeasure - with Paraphrasing or with "Parrot- Phrasing."
      {'\n\n'}With both techniques, you have the aggressor's attention because he is listening to his own words. And as long as he is listening, you have control. Just as important, when you thoughtfully repeat his words, whether they're a threat or a statement of his demands, you create empathy.
      {'\n\n'}When you "parrot-phrase," repeating his words using the same tone, you come across as a person who cares and respects enough about what the aggressor has stated to repeat it, to make sure you understood it. "Let me see if I understand what you've said, Sam. You want us to let you keep your job, transfer you to shipping and give you Thursday afternoons off. Is that what you said?"
      {'\n\n'}Paraphrasing has an additional objective. In addition to repeating the aggressor's words, it uses tone of voice and body language to change intent. Experts in behavioral science tell us that words themselves only convey 7% of a social communication. Tone of voice carries 38% of a communication, and body language 55%. Therefore, tone of voice and body language are 13 times more important than the words themselves! That means every utterance from "What are you doing here?" to "I can't wait to see Aunt Sally" can mean many things depending on tone of voice and body language. It is also important to note that, when body language and words clash, the aggressor will typically rely on your body language for his interpretation. Whether establishing credibility, making an initial impression, or building a bridge of trust, your body language will have the greatest impact.
      {'\n\n'}<Text style={styles.bold}>Higher Priority Values:</Text>Most individuals,including aggressors, place a high priority in one or more elements of their lives. As we probe for these high priority values, we know they fall into five categories:
      {'\n\n'}<Text style={styles.bold}>The Value of Time:</Text>Time is a precious commodity.Time is a precious commodity. In our culture, we think of time as a sort of currency that we "spend," "invest," or "waste." We say, "Time is money," and "Time is precious." Part of its value is that we have a limited amount of it, and become impatient about using what we do have unwisely. Ask the aggressor if he has thought about how much time he is going to lose if he goes through with his threat or doesn't end the incident he has begun. The ultimate loss of time, of course, is months or even years in prison. You need to emphasize this possibility up front. At the very least, he may have to spend hours talking to looking for another job or just waiting to hear the outcome of his actions. "Sam, have you got time for all the hassle you may be creating? You're going to be wasting a lot of time, and if you're like me, you don't have a lot of time in your day to waste. But it's up to you."
      {'\n\n'}<Text style={styles.bold}>The Value of Money:</Text> Even if he feels he is justified in his actions, the aggressor faces attorney's fees, investigation costs and other expenses he can't even anticipate and certainly can't afford. At the same time, he may lose his source of income, and have a difficult time finding another job that pays enough to meet his living expenses. "Sam, how are you going to support your family if you lose this job? What about payments on that truck you bought last month? And, of course, you'd lose your medical insurance. Is this worth losing all that?"
      {'\n\n'}<Text style={styles.bold}>The Value of Job:</Text> Almost everyone who has a job enjoys the prestige of having that job, and has also felt the anxiety of not having one. A job contributes not only income, a sense of self-worth and dignity, but security and peace of mind. A job with some problems is better than no job. "Sam, you've got a good job here. How long would it take to find another one that pays this well?"
      {'\n\n'}<Text style={styles.bold}>The Value of Record:</Text> Beyond the job itself, most individuals place a high value on the record they've achieved. For many, the stress of continuing high performance or frustration and anger at not being recognized for that record of performance is what pushes them toward aggression. Appeal to their pride in their record, and to their sense of professionalism, which is a genuine source of dianity "Sam you've been here source of dignity. "Sam, you've been here for 15 years. You've got an excellent record, and even if you don't think you've been treated fairly, you don't want to spoil that record with one incident like this."
      {'\n\n'}There is a dark side to one's record to consider as well - a criminal record. A survey from the Society for Human Resources Management (SHRM) found only 2% of workplace aggressors who perpetrate violence have a criminal record. For the clear majority of aggressors, the possibility of a criminal record would certainly be significant incentive to end the incident.
      {'\n\n'}<Text style={styles.bold}>The Value of Family/Mate:</Text> Few individuals want to let their families down. Love and loyalty are strong values regardless of the makeup of the household. Few are indifferent about "letting the kids down" or putting the family in financial jeopardy. "Sam, what's your wife going to think? What about your daughter. She really looks up to you."
      {'\n\n'}Ask questions that help you ascertain which values the aggressor holds in highest priority, then show him how his actions are threatening those values. Because you don't really know which of these values, or which combination, is likely to impact the aggressor's thinking, you need to wrap them all up into one summation of possibilities by applying all the higher priority values at once:
      {'\n\n'}<Text style={styles.bold}>Applying all the Higher Priority Values at Once:</Text>Aggressors don't care what you know; they only want to know that you care. By applying all of the High Priority Values in one statement, you illustrate that you care enough to make the best case for a constructive resolution of issues.
      {'\n\n'}"Sam, if you really did try to hurt Johnson, or actually did hurt him":
      {'\n\n'}"The Law might see it as attempted murder! You'd have a criminal record."
      {'\n\n'}"We'd have no choice, you'd lose your job, your health insurance."
      {'\n\n'}"How would you be seen by your co- workers, as a fair-minded guy?"
      {'\n\n'}"What would your wife and daughter think then?"
      {'\n\n'}<Text style={styles.bold}>Need Clarity? Write it Down:</Text>If you have an aggressor losing his quality of judgment, an excellent technique is asking him to write all the details down. This offers many advantages. First, it takes the aggressor from his emotional right brain hemisphere to his analytical left brain hemisphere, giving him a clearer picture with which to make lucid decisions that require high quality of judgment. The very act of structuring words, phrases and paragraphs disciplines us to be more structured in our thought process, helping us de- escalate and regain our quality of judgment.
      {'\n\n'}<Text style={styles.bold}>Determining the Crux of the Matter:</Text>At the outset, as you work to gain the trust of an aggressor, you need to be sizing up the individual. So, ask yourself several questions:
      {'\n\n'}Where is he coming from? How did he get to these circumstances? What is his agenda?
      {'\n\n'}What has he got to gain if he continues on this aggressive path? What has he got to gain if he follows my path?
      {'\n\n'}What has he got to lose if he continues on this aggressive path? What has he got to lose if he follows my path?
      {'\n\n'}How can I use the answers to the first three questions to dissuade him from continuing his aggressive course?
      {'\n\n'}The answers to the Crux of the Matter questions can be determined by asking the aggressor the right kind of questions. You can ask six types of questions, some good, some not so good:
      {'\n\n'}<Text style={styles.bold}>Types of Questions and Their Use:</Text>
      {'\n\n'}<Text style={styles.bold}>Open-ended Questions - Good:</Text>The ultimate of persuasion is when an aggressor believes you understand his issue and thereby can be trusted with his issue. To properly understand his issue, you must get this aggressor to open-up and give you information from his perspective. An open question is any that requires him to explain or expound on an issue that is on his mind. These are typically "What," "Why" and "When" questions that draw him out from behind his wall of anger or frustration. "What" or "Why" question might be inflammatory when referring to the aggressor or his actions. If possible, use a "When" question that deflects blame and may sound less judgmental. "Sam, when did you begin feeling anxious about this issue?"
      {'\n\n'}<Text style={styles.bold}>Closed-ended Questions - Not good:</Text> These are any questions that the aggressor can answer with a simple "Yes" or "No." They allow him to stay behind the wall, and are counterproductive to your objective of getting to the Crux of the Matter. "This isn't the way to solve your problem, is it?" "Sam, are you so unhappy here that you'd threaten someone?"
      {'\n\n'}<Text style={styles.bold}>Probing Questions - Good:</Text> These questions are often follow-ups to your initial Open Questions, in that they delve deeper into an issue after it has been exposed by the aggressor. Probing questions are also Open Questions. "Sam, how do you think you could have handled your frustration without hurting Louise's feelings?"
      {'\n\n'}<Text style={styles.bold}>Leading Questions - Not good:</Text> Leading Questions are good only after you have determined the Crux of the Matter. Before this, you will only be confirming your own opinion, not necessarily getting to the actual Crux of the Matter for this Emerging Aggressor. After you believe you've reached the Crux of the Matter, confirm your conclusion in the form of a Leading Question. "So, Sam, if I understand what you've been saying, the real issue here is your resentment that after 16 years of service in the company, promotions are going to younger people. Isn't that correct?"
      {'\n\n'}<Text style={styles.bold}>Loaded Questions - Never good:</Text> Never ask Loaded Questions, because they incriminate or belittle the aggressor, force him to admit he is at fault or even insult him. This causes the loss of that critical persuasive element of "trust." "Sam, isn't this the dumbest thing you've ever done?" Again, such a question would undermine your pursuit of the Crux of the Matter, losing any form of "trust" you may have otherwise developed, and probably end your ability to persuade this aggressor away from his aggression.
      {'\n\n'}<Text style={styles.bold}>Power of Silence - Good:</Text> Just as important as the type of question you ask is what you do after asking the question. You shut up! Remember that your task is to draw information out of the aggressor, not keep him quiet by doing all the talking yourself. The individual has used aggressive actions to make a statement he perhaps could not make verbally, or that no one seemed interested in hearing. You demonstrate your interest by listening.
      {'\n\n'}<Text style={styles.bold}>That brings us to the Power of Silence:</Text> During an aggressive situation, the aggressor may want to talk. So, when you ask him a question, be silent and let him fully complete his answer. And after he has finished his initial answer, you may feel he has more to say, so remain quiet. Let silence work. He may have the urge to fill it with more information you need to bring the incident to a successful close.
      {'\n\n'}Your skillful use of Open and Probing questions and silence should give you some answers about what is really going on in the aggressor's mind, what is important to him and what he values. Once you have this information, you have key leverage to use in further discussion.


      </Text>), expanded: false },

{   title: (  <View>
  <Text  style={{ fontSize: wp('6.3%'),fontWeight: 'bold',color:'black' }}>Prespective Three</Text>
  <Text style={styles.titleSub}>Illustrates CAPS Trust Tenet</Text>
  </View>), explanation: (  <Text style={styles.info}>{'\n\n'}
  <Text style={styles.bold}>1. CAPS Trust Tenet</Text>
{'\n\n'}<Text style={styles.bold}>Explained: </Text>Persuasive Tactics, if conveyed with a genuine and caring tone, instills Trust! Persuasive Tactics are designed to convince an aggressor away from their current aggressive path to a more constructive path without the aggressor realizing they are being persuaded. Aggressors' tend to respond to these Persuasive Tactics by engendering rapport and ultimately trust. If we are to be Aggression Managers, we must be able to use these Persuasive Tactics as effective offense, or defensive, as we recognize and respond appropriately in the heat of an incident of aggression. The following are Persuasion Tactics we have developed over the years. The utilization of these mental short cuts enables us to quickly process and employ these tactics to move an aggressor to a more constructive path.
{'\n\n'}<Text style={styles.bold}>Persuasive Tactic Described:</Text> We live with the blessings, and the curse, of the Information Internet Age. Our world is awash with information, much of it extraneous. In order for us to function effectively, our minds create short cuts to process the flood of input our minds receive each day. In today's computer & smartphone- conscious times, we could call this "default thinking."
{'\n\n'} It's dinnertime. The phone rings. I answer and a voice says, "Good evening, is this Dr. John Byrnes (usually mispronounced)? How are you this evening?" Instant default thinking cuts to a conclusion: This is a sales pitch Isave both our time by responding, "Thanks, but I'm not interested," and hang up.
{'\n\n'}These short cuts can trigger either a positive or a negative response to a communication - negative in the case of the phone solicitor - especially a spoken message by one person meant to influence the thinking of another, or to persuade him to reconsider his opinion on an issue.
{'\n\n'}To better understand and respond with the Critical Aggression Prevention System (CAPS), we highly recommend taking <Text style={styles.link} 
      onPress={()=>Linking.openURL('https://aggressionmanagement.com/caps_training.php')}>CAPS Training</Text>, either Certified Aggression Managers or Ambassadors' (train-the-trainers) Webinar-based Workshops.
{'\n\n'}<Text style={styles.bold}>1. Persuasive Tactic of the Limited Offer</Text>
{'\n\n'}When an individual perceives that something he might want is limited in quantity, he often believes that its value is greater than if it were available in abundance.
{'\n'}The harder something is to acquire, the greater the value we place on its attainment. No urgency, no scarcity, often produces no desire.
{'\n'}Make what you are offering rare and hard to find, and you instantly bincrease its value.
{'\n'}A Suggested Tactical Statement: "Sam, you have worked hard to gain this important position, you may never have an opportunity like this again, why take the risk of losing it?"
{'\n'}<Text style={styles.bold}>2. Persuasive Tactic of Reciprocity</Text>
{'\n\n'}When someone gives you something of perceived value, you immediately respond with the desire to give something back, often something of greater value.
{'\n\n'}People dislike the feeling of "owing."
{'\n\n'}Beware of free offerings, they can involve either a trick or a hidden obligation.
{'\n\n'}A Suggested Tactical Statement:
{'\n\n'}"I really don't have time for you today, but I am going to make an exception for you because I believe your issue is important." What do I want in return? His co-operation.
{'\n\n\n'}<Text style={styles.bold}>3. Persuasive Tactic of Creating Expectation</Text>
{'\n\n'}Our expectations of ourselves and others play a powerful role in how we digest information and how we perform.
{'\n\n'}When someone, whom you believe in or respect, expects you to perform a task or act in a certain way, you will tend to fulfill his expectation whether positive or negative.
{'\n\n'}"Positive Expectations" is one of the four key ingredients of hardiness asit relates to psychoneuroimmunology. N. Cousins, (1989) Head First: The Biology of Hope.
{'\n\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>
{'\n\n'}"Stick with me, I'll make us both winners."
{'\n\n'}"I know I can count on you. I know that you can do it!"
{'\n\n'}<Text style={styles.bold}>4.Persuasive Tactic of Contrast</Text>
{'\n'}When two items are relatively different from each other, we will see them as more different if placed in close proximity of each other, either in time or space. A Suggested Tactical Statement: If you want something to contrast starkly, show or share them together. Bring up both issues together with a genuine and caring tone: "Sam, you can enjoy watching your daughter grow up every day - or you can face the possibility of years in jail away from her. It's your choice."
{'\n'}If you want to diminish the differences between two issues, share them further apart. Show one today and the other a week from today. "Sam, I haven't mentioned it before, but I think you'd prefer being a free man, with no criminal record, and be able to watch your daughter grow up every day. I know I would."
{'\n\n'}<Text style={styles.bold}>5. Persuasive Tactic of Projected Thinking</Text>
{'\n'}Our mind perceives what it is conditioned to perceive. In "Controllin Options" learn how we can condition our aggressor to choose options we create People see and hear exactly what they expect to see and hear, even if it differs from their actual perception. They project their views on reality so that reality changes to become what they project.
{'\n'}<Text style={styles.italic}>A Suggested Tactical Statement: </Text>
{'\n'}In 2000, in Florida, all Presidential ballots were recounted. The question as to what represented a vote or no vote had a great deal to do with your political affiliation:
{'\n'}"It's perfectly clear. This ballot is valid because we can see from the dimpled chad who the voter intended to vote for."
{'\n\n'}"It's perfectly clear. This ballot is invalid, because the voter did not punch a hole through the indicated area in accordance with clearly visible instructions."
{'\n\n'}<Text style={styles.bold}>6. Persuasive Tactic of Continuity</Text> Aggressors tend to react in a way that is consistent with what they perceive as truth and is a continuation of their current perspective. If you begin your persuasion from what the aggressor perceives as truth, he will more readily accept and respond to your persuasion. An example of this is a story that educator John Holt tells of visiting an elementary school and observing a geography lesson. The fifth-grade teacher was pointing to a wall map of the United States and was asking the students questions dealing with points of the compass. Holt, on a hunch, asked if the might ask a question. He approached the wall map, removed it, and laid it flat on the floor. He then asked the students, "Which way is north?" All the students pointed toward the ceiling!
{'\n'}If you illustrate a pattern of behavior, it is assumed that you will continue that behavior. Predictability gives people a sense of control and, they expect and desire it. Behavior that seems to have no continuity or purpose will keep humans off-balance and cause increasing consternation. As a point of beginning, identify what your aggressor's predispositions are and build your persuasion from them.
{'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>"You remember when I helped Jack work through a similar issue. I can do the same for you, if you will let me.
{'\n\n'}<Text style={styles.bold}>7. Persuasive Tactic of Acceptance by Association</Text>
{'\n'}We agree with those whom we respect; we listen to those whom we like. People tend to accept opinions or ideas endorsed by others that they trust or admire.
{'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>"You don't have to take my word, Sam Ack your friends at work Sam. Ask your friends at work, those you trust, how I've always supported them - just like I want to help you now."
{'\n'}<Text style={styles.bold}>8. Persuasive Tactic of Infectious Emotions and Attitudes</Text> Emotions and attitudes are infectious: anger, panic, fear, calm, positive, negative, solution oriented (SolutionPerson) are all contagious. If your attitude is "I'm Dead!" what result will this produce? We hear that the emotion "panic" is contagious, but did you realize that "Calm" is also contagious! Use Cycle Breathing to control and maintain your calm.
{'\n\n'}<Text style={styles.bold}>9. Persuasive Tactic of Reducing Isolation</Text>
{'\n'}If you see someone beginning to isolate themselves, encourage them to rely on the network of friends.
{'\n'}Humans are social creatures by nature. They crave contact with others.
{'\n'}In moments of uncertainty and danger, you need to resist the desire to isolate yourself you need to seek out friends, old and new, to come to your aid.
{'\n'}Isolationism can soon become a prison.
{'\n'}If you see someone beginning to isolate themselves, encourage them rely on the network of friends.

{'\n\n'}<Text style={styles.bold}>10. Persuasive Tactic of Fears </Text>By focusing on those things which cause us anguish and anxiety we give that anguish and anxiety power. We must be aware of those things that cause us anxiety.However, we must focus on those things that produce solutions SolutionPerson. We tell bank tellers and other potential victims of armedrobbery, never focus on the weapon, because you put the weapon in charge. When we dwell on a petty problem, we give it existence and credibility.Most all people are motivated toward pleasure and away from pain.People are more motivated by the fear of pain than the desire to seek pleasure.
{'\n\n'}<Text style={styles.bold}> 11. Persuasive Tactic of Friends</Text> It is important to be perceived as a friend (someone you like and who engenders trust) if you are to be successful in the persuasion process, because, when someone you like and trust asks you to do something, you want to do it.
{'\n\n'}<Text style={styles.bold}>12. Persuasive Tactic of Expanding on Perspective</Text>
{'\n'}An Aggression Manager may find it more effective to convince an aggressor that he is not an aggressor, than it is to convince him to not act aggressively.
{'\n'}When an individual announces in writing or verbally that he is taking a position on any issue or point of view, he will strongly tend to defend that belief regardless of its accuracy even in the face of overwhelming evidence to the contrary. "Once you are a hammer, everything looks like a nail."
{'\n'}Abraham Maslow Thus, you will have better results if you convince an aggressor that he is not an aggressor, rather than attempt to convince him to not act aggressively.
{'\n\n'}<Text style={styles.bold}>13. Persuasive Tactic of Peer Conformity</Text> People tend to agree to ideas or proposals they perceive as acceptable to the majority of others in their peer group.
{'\n'}<Text style={styles.italic}>A Suggested Tactical Statement:</Text>
{'\n\n'} "Sam, I'm sure you're proud that your work team has a record of zero claimsover the last five years. And everyone is working so hard to continue this excellent record."
{'\n\n'}<Text style={styles.bold}>14. Persuasive Tactic of Power</Text> People exercise power over other people to the degree that those exercising power are perceived as having greater authority, strength or expertise.
{'\n'}Unfortunately, many people who are perceived as having power or strengthbecause they threaten the use of aggression to get what they want. As an Aggression Manager, recognize this "play for power" and don't let it influence your thoughts or actions.
{'\n\n'}<Text style={styles.bold}>15. Persuasive Tactic of Using Words with Power</Text>
{'\n'}Use of an individual's name, preferably their first name is a powerful attention getter.
{'\n\n'}Using "Please" and "Thank You" tends to motivate people and make them feel respected.
{'\n\n'}Frame your words in the positive avoid "Don't": People often cannot make a picture of the word "don't" in their minds, because it is not a noun.
{'\n'}What is stated as a negative may be heard in the brain as a positive;the opposite of your intention.
{'\n\n'}<Text style={styles.italic}>A Suggested Tactical Statement: Be careful of the effects of the following statements:</Text>
{'\n\n'} "Don't feel as though you have to buy something today." This may be heard as, "Buy today."

</Text>), expanded: false },

  ]);

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

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#9d0808" />
      <View style={styles.header}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={require('../assets/img/backarrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { flex: 1, textAlign: 'center' }]}>Aggregation Stage Four</Text>
      </View>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollView}>
    
     
        {items.map((item, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity onPress={() => expandItem(item)} style={styles.cardHeader}>
              <Image source={require('../assets/img/escolaimg.png')} style={styles.clip} />
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

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#9d0808',
    padding: hp('2%'), // Responsive padding
    width: '100%',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: wp('5.8%'), // Adjusted font size to be responsive
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
  info: {
    marginTop: hp('2.5%'), // Responsive margin
    fontSize: wp('4%'), // Responsive font size
    lineHeight: hp('3.5%'), // Responsive line height
    color: '#666',
    textAlign: 'justify',
  },
  backIcon: {
    width: wp('7%'), // Responsive width
    height: wp('7%'), // Responsive height
    padding: hp('1%'), // Responsive padding
    tintColor: '#fff',
  },
  scrollView: {
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
  },
  card: {
    marginTop: hp('2%'), // Responsive margin
    marginBottom: hp('3%'), // Responsive margin
    borderRadius: 2,
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clip: {
    width: wp('5%'), // Responsive width
    height: wp('5%'), // Responsive height
    tintColor: '#b71c1c',
    resizeMode: 'contain',
    marginLeft: wp('4%'), // Responsive margin
    marginRight: wp('2%'), // Responsive margin
    marginBottom: hp('2%'), // Responsive margin
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#333',
    fontSize: wp('4.5%'), // Responsive font size
    flex: 1,
  },
  arrow: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    tintColor: '#b71c1c',
  },
  arrowDown: {
    width: wp('3%'), // Adjusted width to be responsive
    height: hp('2.2%'), // Adjusted height to be responsive
    transform: [{ rotate: '90deg' }],
  },
  cardContent: {
    paddingHorizontal: wp('4%'), // Responsive horizontal padding
    paddingVertical: hp('1.5%'), // Responsive vertical padding
  },
  footer: {
    height: hp('8%'), // Responsive height
    backgroundColor: '#9d0808',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerIcon: {
    width: wp('6%'), // Responsive width
    height: wp('6%'), // Responsive height
    tintColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: wp('5%'), // Responsive margin
    backgroundColor: 'white',
    borderRadius: 10,
    padding: hp('4%'), // Responsive padding
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  modalTitles: {
    fontSize: wp('4.5%'), // Responsive font size
    fontWeight: 'bold',
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
 modalText: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('2%'), // Responsive margin
    color: 'black',
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    borderRadius: 5,
    padding: hp('2%'), // Responsive padding
    marginHorizontal: wp('2%'), // Responsive margin
    backgroundColor: '#9d0808',
  },
  modalButtonText: {
    color: 'white',
    fontSize: wp('4%'), // Responsive font size
  },
  ptext: {
    fontSize: wp('4%'), // Responsive font size
    marginBottom: hp('3%'), // Responsive margin
    textAlign: 'center',
  },
  titleSub: {
    fontSize: wp('4.2%'), // Adjusted font size to be responsive
    color: 'black',
  },
});

export default AggressionStageFourScreen;
