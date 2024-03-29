/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

goog.provide('box2d.Testbed.TestEntries');

goog.require('box2d.Testbed.Test');

goog.require('box2d.Testbed.AddPair');
goog.require('box2d.Testbed.AntiPointy');
goog.require('box2d.Testbed.ApplyForce');
goog.require('box2d.Testbed.BasicSliderCrank');
goog.require('box2d.Testbed.BlobTest');
goog.require('box2d.Testbed.BodyTypes');
goog.require('box2d.Testbed.Breakable');
goog.require('box2d.Testbed.Bridge');
goog.require('box2d.Testbed.BulletTest');
goog.require('box2d.Testbed.BuoyancyTest');
goog.require('box2d.Testbed.Cantilever');
goog.require('box2d.Testbed.Car');
goog.require('box2d.Testbed.Chain');
goog.require('box2d.Testbed.CharacterCollision');
goog.require('box2d.Testbed.CollisionFiltering');
goog.require('box2d.Testbed.CollisionProcessing');
goog.require('box2d.Testbed.CompoundShapes');
goog.require('box2d.Testbed.Confined');
goog.require('box2d.Testbed.ContinuousTest');
goog.require('box2d.Testbed.ConvexHull');
goog.require('box2d.Testbed.ConveyorBelt');
goog.require('box2d.Testbed.CornerCase');
goog.require('box2d.Testbed.DamBreak');
goog.require('box2d.Testbed.DistanceTest');
goog.require('box2d.Testbed.Dominos');
goog.require('box2d.Testbed.DominoTower');
goog.require('box2d.Testbed.DrawingParticles');
goog.require('box2d.Testbed.DumpShell');
goog.require('box2d.Testbed.DynamicTreeTest');
goog.require('box2d.Testbed.EdgeShapes');
goog.require('box2d.Testbed.EdgeTest');
goog.require('box2d.Testbed.ElasticParticles');
goog.require('box2d.Testbed.Empty');
goog.require('box2d.Testbed.EyeCandy');
goog.require('box2d.Testbed.Faucet');
goog.require('box2d.Testbed.Fracker');
goog.require('box2d.Testbed.Gears');
goog.require('box2d.Testbed.HeavyOnLight');
goog.require('box2d.Testbed.HeavyOnLightTwo');
goog.require('box2d.Testbed.Impulse');
goog.require('box2d.Testbed.LiquidTimer');
goog.require('box2d.Testbed.Maxwell');
goog.require('box2d.Testbed.Mobile');
goog.require('box2d.Testbed.MobileBalanced');
goog.require('box2d.Testbed.MotorJoint');
goog.require('box2d.Testbed.MultipleParticleSystems');
goog.require('box2d.Testbed.OneSidedPlatform');
goog.require('box2d.Testbed.Particles');
goog.require('box2d.Testbed.ParticlesSurfaceTension');
goog.require('box2d.Testbed.Pinball');
goog.require('box2d.Testbed.Pointy');
goog.require('box2d.Testbed.PolyCollision');
goog.require('box2d.Testbed.PolyShapes');
goog.require('box2d.Testbed.Prismatic');
goog.require('box2d.Testbed.Pulleys');
goog.require('box2d.Testbed.Pyramid');
goog.require('box2d.Testbed.PyramidTopple');
goog.require('box2d.Testbed.Ramp');
goog.require('box2d.Testbed.RayCast');
goog.require('box2d.Testbed.Revolute');
goog.require('box2d.Testbed.RigidParticles');
goog.require('box2d.Testbed.Rope');
goog.require('box2d.Testbed.RopeJoint');
goog.require('box2d.Testbed.Sandbox');
goog.require('box2d.Testbed.SensorTest');
goog.require('box2d.Testbed.ShapeEditing');
goog.require('box2d.Testbed.SliderCrank');
goog.require('box2d.Testbed.Soup');
goog.require('box2d.Testbed.SoupStirrer');
goog.require('box2d.Testbed.Sparky');
goog.require('box2d.Testbed.SphereStack');
goog.require('box2d.Testbed.TestCCD');
goog.require('box2d.Testbed.TestRagdoll');
goog.require('box2d.Testbed.TestStack');
goog.require('box2d.Testbed.TheoJansen');
goog.require('box2d.Testbed.Tiles');
goog.require('box2d.Testbed.TimeOfImpact');
goog.require('box2d.Testbed.TopdownCar');
goog.require('box2d.Testbed.Tumbler');
goog.require('box2d.Testbed.VaryingFriction');
goog.require('box2d.Testbed.VaryingRestitution');
goog.require('box2d.Testbed.VerticalStack');
goog.require('box2d.Testbed.WaveMachine');
goog.require('box2d.Testbed.Web');

/** 
 * @export 
 * @return {Array.<box2d.Testbed.TestEntry>} 
 * @param {Array.<box2d.Testbed.TestEntry>} entries 
 */
box2d.Testbed.GetTestEntries = function (entries)
{
//#if B2_ENABLE_PARTICLE
	entries.push(new box2d.Testbed.TestEntry("Sparky", box2d.Testbed.Sparky.Create));
//#endif

	entries.push(new box2d.Testbed.TestEntry("Ragdolls", box2d.Testbed.TestRagdoll.Create));
	entries.push(new box2d.Testbed.TestEntry("Topdown Car", box2d.Testbed.TopdownCar.Create));

	entries.push(new box2d.Testbed.TestEntry("Tiles", box2d.Testbed.Tiles.Create));
	entries.push(new box2d.Testbed.TestEntry("Heavy on Light", box2d.Testbed.HeavyOnLight.Create));
	entries.push(new box2d.Testbed.TestEntry("Heavy on Light Two", box2d.Testbed.HeavyOnLightTwo.Create));
	entries.push(new box2d.Testbed.TestEntry("Vertical Stack", box2d.Testbed.VerticalStack.Create));
	entries.push(new box2d.Testbed.TestEntry("Basic Slider Crank", box2d.Testbed.BasicSliderCrank.Create));
	entries.push(new box2d.Testbed.TestEntry("Slider Crank", box2d.Testbed.SliderCrank.Create));
	entries.push(new box2d.Testbed.TestEntry("Sphere Stack", box2d.Testbed.SphereStack.Create));
	entries.push(new box2d.Testbed.TestEntry("Convex Hull", box2d.Testbed.ConvexHull.Create));
	entries.push(new box2d.Testbed.TestEntry("Tumbler", box2d.Testbed.Tumbler.Create));
	entries.push(new box2d.Testbed.TestEntry("Ray-Cast", box2d.Testbed.RayCast.Create));
	entries.push(new box2d.Testbed.TestEntry("Dump Shell", box2d.Testbed.DumpShell.Create));
	entries.push(new box2d.Testbed.TestEntry("Apply Force", box2d.Testbed.ApplyForce.Create));
	entries.push(new box2d.Testbed.TestEntry("Continuous Test", box2d.Testbed.ContinuousTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Time of Impact", box2d.Testbed.TimeOfImpact.Create));
	entries.push(new box2d.Testbed.TestEntry("Motor Joint", box2d.Testbed.MotorJoint.Create));
	entries.push(new box2d.Testbed.TestEntry("One-Sided Platform", box2d.Testbed.OneSidedPlatform.Create));
	entries.push(new box2d.Testbed.TestEntry("Mobile", box2d.Testbed.Mobile.Create));
	entries.push(new box2d.Testbed.TestEntry("MobileBalanced", box2d.Testbed.MobileBalanced.Create));
	entries.push(new box2d.Testbed.TestEntry("Conveyor Belt", box2d.Testbed.ConveyorBelt.Create));
	entries.push(new box2d.Testbed.TestEntry("Gears", box2d.Testbed.Gears.Create));
	entries.push(new box2d.Testbed.TestEntry("Varying Restitution", box2d.Testbed.VaryingRestitution.Create));
	entries.push(new box2d.Testbed.TestEntry("Cantilever", box2d.Testbed.Cantilever.Create));
	entries.push(new box2d.Testbed.TestEntry("Character Collision", box2d.Testbed.CharacterCollision.Create));
	entries.push(new box2d.Testbed.TestEntry("Edge Test", box2d.Testbed.EdgeTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Body Types", box2d.Testbed.BodyTypes.Create));
	entries.push(new box2d.Testbed.TestEntry("Shape Editing", box2d.Testbed.ShapeEditing.Create));
	entries.push(new box2d.Testbed.TestEntry("Car", box2d.Testbed.Car.Create));
	entries.push(new box2d.Testbed.TestEntry("Prismatic", box2d.Testbed.Prismatic.Create));
	entries.push(new box2d.Testbed.TestEntry("Revolute", box2d.Testbed.Revolute.Create));
	entries.push(new box2d.Testbed.TestEntry("Pulleys", box2d.Testbed.Pulleys.Create));
	entries.push(new box2d.Testbed.TestEntry("Polygon Shapes", box2d.Testbed.PolyShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("Web", box2d.Testbed.Web.Create));
	entries.push(new box2d.Testbed.TestEntry("RopeJoint", box2d.Testbed.RopeJoint.Create));
	entries.push(new box2d.Testbed.TestEntry("Pinball", box2d.Testbed.Pinball.Create));
	entries.push(new box2d.Testbed.TestEntry("Bullet Test", box2d.Testbed.BulletTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Confined", box2d.Testbed.Confined.Create));
	entries.push(new box2d.Testbed.TestEntry("Pyramid", box2d.Testbed.Pyramid.Create));
	entries.push(new box2d.Testbed.TestEntry("Theo Jansen's Walker", box2d.Testbed.TheoJansen.Create));
	entries.push(new box2d.Testbed.TestEntry("Edge Shapes", box2d.Testbed.EdgeShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("PolyCollision", box2d.Testbed.PolyCollision.Create));
	entries.push(new box2d.Testbed.TestEntry("Bridge", box2d.Testbed.Bridge.Create));
	entries.push(new box2d.Testbed.TestEntry("Breakable", box2d.Testbed.Breakable.Create));
	entries.push(new box2d.Testbed.TestEntry("Chain", box2d.Testbed.Chain.Create));
	entries.push(new box2d.Testbed.TestEntry("Collision Filtering", box2d.Testbed.CollisionFiltering.Create));
	entries.push(new box2d.Testbed.TestEntry("Collision Processing", box2d.Testbed.CollisionProcessing.Create));
	entries.push(new box2d.Testbed.TestEntry("Compound Shapes", box2d.Testbed.CompoundShapes.Create));
	entries.push(new box2d.Testbed.TestEntry("Distance Test", box2d.Testbed.DistanceTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Dominos", box2d.Testbed.Dominos.Create));
	entries.push(new box2d.Testbed.TestEntry("Dynamic Tree", box2d.Testbed.DynamicTreeTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Sensor Test", box2d.Testbed.SensorTest.Create));
	entries.push(new box2d.Testbed.TestEntry("Varying Friction", box2d.Testbed.VaryingFriction.Create));
	entries.push(new box2d.Testbed.TestEntry("Add Pair Stress Test", box2d.Testbed.AddPair.Create));
	
//#if B2_ENABLE_ROPE
	entries.push(new box2d.Testbed.TestEntry("Rope", box2d.Testbed.Rope.Create));
//#endif
	entries.push(new box2d.Testbed.TestEntry("Blob Test", box2d.Testbed.BlobTest.Create));
//#if B2_ENABLE_CONTROLLER
	entries.push(new box2d.Testbed.TestEntry("Buoyancy Test", box2d.Testbed.BuoyancyTest.Create));
//#endif
	
	entries.push(new box2d.Testbed.TestEntry("Continuous Collision", box2d.Testbed.TestCCD.Create));
	entries.push(new box2d.Testbed.TestEntry("Stacked Boxes", box2d.Testbed.TestStack.Create));
	entries.push(new box2d.Testbed.TestEntry("Domino Tower", box2d.Testbed.DominoTower.Create));
	entries.push(new box2d.Testbed.TestEntry("Pyramid Topple", box2d.Testbed.PyramidTopple.Create));
	
//#if B2_ENABLE_PARTICLE
	entries.push(new box2d.Testbed.TestEntry("Sandbox", box2d.Testbed.Sandbox.Create));
	//entries.push(new box2d.Testbed.TestEntry("Sparky", box2d.Testbed.Sparky.Create));
	entries.push(new box2d.Testbed.TestEntry("Dam Break", box2d.Testbed.DamBreak.Create));
	entries.push(new box2d.Testbed.TestEntry("Liquid Timer", box2d.Testbed.LiquidTimer.Create));
	entries.push(new box2d.Testbed.TestEntry("Wave Machine", box2d.Testbed.WaveMachine.Create));
	entries.push(new box2d.Testbed.TestEntry("Particles", box2d.Testbed.Particles.Create));
	entries.push(new box2d.Testbed.TestEntry("Faucet", box2d.Testbed.Faucet.Create));
	entries.push(new box2d.Testbed.TestEntry("Particle Drawing", box2d.Testbed.DrawingParticles.Create));
	entries.push(new box2d.Testbed.TestEntry("Soup", box2d.Testbed.Soup.Create));
	entries.push(new box2d.Testbed.TestEntry("Surface Tension", box2d.Testbed.ParticlesSurfaceTension.Create));
	entries.push(new box2d.Testbed.TestEntry("Elastic Particles", box2d.Testbed.ElasticParticles.Create));
	entries.push(new box2d.Testbed.TestEntry("Rigid Particles", box2d.Testbed.RigidParticles.Create));
	entries.push(new box2d.Testbed.TestEntry("Multiple Systems", box2d.Testbed.MultipleParticleSystems.Create));
	entries.push(new box2d.Testbed.TestEntry("Impulse", box2d.Testbed.Impulse.Create));
	entries.push(new box2d.Testbed.TestEntry("Soup Stirrer", box2d.Testbed.SoupStirrer.Create));
	entries.push(new box2d.Testbed.TestEntry("Fracker", box2d.Testbed.Fracker.Create));
	entries.push(new box2d.Testbed.TestEntry("Maxwell", box2d.Testbed.Maxwell.Create));
	entries.push(new box2d.Testbed.TestEntry("Ramp", box2d.Testbed.Ramp.Create));
	entries.push(new box2d.Testbed.TestEntry("Pointy", box2d.Testbed.Pointy.Create));
	entries.push(new box2d.Testbed.TestEntry("AntiPointy", box2d.Testbed.AntiPointy.Create));
	entries.push(new box2d.Testbed.TestEntry("Corner Case", box2d.Testbed.CornerCase.Create));
	entries.push(new box2d.Testbed.TestEntry("Eye Candy", box2d.Testbed.EyeCandy.Create));
//#endif

	//entries.push(new box2d.Testbed.TestEntry("Empty", box2d.Testbed.Empty.Create));

	return entries;
}

