---
layout: front.njk
eleventyExcludeFromCollections: true
---

<div class="row">
  <div class="column">
    <img src="img/wblogo_sm.png" alt="Snow" >
  </div>
  <div class="column">
    <!--<p>Ideas and resources for outdoor learning and play.</p>-->
  </div>
  <!--<div class="column">
    <img src="img/wblogo_sm.png" alt="Mountains" style="width:100%">
  </div>-->
</div>

<!--
<div id="title">
<b>Convivial</b>: Conversations about the Decolonization of Technology
</div>
-->

<!--
<div id="blurb">

<img src="img/wblogo_sm.png"> Resources on outdoor pedagogy.
-->

<!--
<span id="punch">Convivial</span> is a proposed series of investigations and conversations around the idea of decolonizing technology, in a diverse array of contexts. What exactly 'decolonization' means will likely vary significantly from person to person; our aim is to use it as a jumping off point for exploring topics like exploitation, control, autonomy, and the project of developing more democratic, collaborative, cooperative approaches to the technologies and infrastructure upon which we all rely for survival and for flourishing.
-->

<!--</div>-->

<!--
- <div id="highlight"> <a href="#provocations">Provocations & Guiding Questions</a></div> and guiding questions to serve as common entry points across the conversations. 
- <div id="highlight"> <a href="#formal">Experiments in Dialogue Form & Process</a></div> that explore alternative approaches to conductiving interviews, archiving, and sharing conversation data. Federated platforms; peer-to-peer filesharing; asynchronous Q&A, etc.
- <div id="highlight"> <a href="#topics">Suggested Conversation Topics</a></div> that might serve as starting points for the series.
- <div id="highlight"> <a href="#inperson">Field Research & Infrastructure Prototyping</a></div> that implement or explore ideas or themes emerging from the conversations. Projects <i>in situ</i>, on-the-ground.

</div>
-->


<!--
<div id="blurb">

Some baseline queries and provocations to present to interlocutors that might serve as useful starting points in various conversations about decolonizing technology. 

</div>
-->

<div id="blurb">

{% for post in collections.blogCollection %}
<a href="{{ post.url }}">{{ post.data.pageTitle }}</a> 
-- {{ post.data.blurb }} ({{ post.date | date: "%Y-%m-%d" }})

{% endfor %}

</div>

<hr>

<div class="posts-area">
{% for post in collections.sortedQuestionsTag %}
  <div class="post">
    <div class="formal-contents">
      <div class="text">

<a href="{{ post.url }}"><img src={{ post.data.img }}></a>

<h3> {{ post.fileSlug }}. <a href="{{ post.url }}">{{ post.data.pageTitle}}</a></h3>
        <p>{{ post.data.blurb }}</p>
      </div>
    </div>
  </div>
{% endfor %}
</div>

