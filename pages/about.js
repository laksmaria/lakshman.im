/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

/*
<h2>From Hobbies to professional</h2>
<p>Lazy desi guy(sound racist!), who waste his time by roaming around newyork city streets and tasting variety of foods and enjoying the life by living in Manhatten (Not a world's best place huh! ) with two of his awesome roommates (Technically only one now :P )</p>
*/

import React, { Component } from 'react';

export default class extends Component {

  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>Hi, my name is Lakshman and I’m a freelance and fulltime Web designer and Developer based on Newyork City. I specialize in desktop, web and app design, front end development, user experience, and usability & wireframing. I’ve worked with companies of all shapes and sizes, so contact me if you’d like to work together on your next project.</p>

        <h2>Fact About Me</h2>
        	<ul>
        		<li>Aside from Job, I shoot lots of picture of the cities wherever i'm travelling</li>
        		<li>Addicted to Play pool game with Votka / mojito</li>
        	</ul>

        <h2>Skill Set</h2>

        <h4>Frond End Technlogies</h4>
            <ul>
                <li>JavaScript</li>
                <li>HTML/HTML5</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>OOP JavaScript</li>
            </ul>

        <h4>JavaScript MVCs</h4>
        	<ul>
                <li>Angular</li>
                <li>Ember</li>
                <li>React</li>
                <li>BackBone</li>
            </ul>                        
        <h4>Graphical based JavaScript</h4>
            <ul>
                <li>HighCharts</li>
                <li>D3</li>
            </ul>
        <h4>JS Server & Build Related Tools</h4>
            <ul>
        		<li>JS Server & Build Related Tools</li>
        		<li>Node</li>
        		<li>Grunt</li>
        		<li>Bower</li>
            </ul>
        <h4>User Interface Design & Development</h4>
            <ul>
        		<li>User Interface Design & Development</li>
        		<li>User Experience Designer</li>
        		<li>Usability Analyst</li>
        		<li>Photoshop</li>
            </ul>
        <h4>Web or Graphics Design</h4>
            <ul>
        		<li>Photoshop</li>
        		<li>Illustrator</li>
        		<li>Flash</li>
            </ul>
        <h4>Wireframe or Usability</h4>
            <ul>
	        	<li>Axure</li>	        		     		
        	</ul>

        <h2>Became a friend or follower </h2>
        	<ul>
        		<li>FB</li>
        		<li>Twitter</li>
        		<li>LinkedIn</li>       		
        	</ul>   
      </div>
    );
  }

}
