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

goog.provide('box2d.b2PolygonContact');

goog.require('box2d.b2Settings');
goog.require('box2d.b2Contact');
goog.require('box2d.b2CollidePolygon');

/**
 * @export 
 * @constructor 
 * @extends {box2d.b2Contact} 
 */
box2d.b2PolygonContact = function ()
{
	box2d.b2Contact.call(this); // base class constructor
};

goog.inherits(box2d.b2PolygonContact, box2d.b2Contact);

/**
 * @export 
 * @return {box2d.b2Contact} 
 * @param allocator 
 */
box2d.b2PolygonContact.Create = function (allocator)
{
	return new box2d.b2PolygonContact();
}

/**
 * @export 
 * @return {void} 
 * @param {box2d.b2Contact} contact 
 * @param allocator 
 */
box2d.b2PolygonContact.Destroy = function (contact, allocator)
{
}

/**
 * @export 
 * @return {void} 
 * @param {box2d.b2Manifold} manifold 
 * @param {box2d.b2Transform} xfA 
 * @param {box2d.b2Transform} xfB 
 */
box2d.b2PolygonContact.prototype.Evaluate = function (manifold, xfA, xfB)
{
	var shapeA = this.m_fixtureA.GetShape();
	var shapeB = this.m_fixtureB.GetShape();
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(shapeA instanceof box2d.b2PolygonShape); }
	if (box2d.ENABLE_ASSERTS) { box2d.b2Assert(shapeB instanceof box2d.b2PolygonShape); }
	box2d.b2CollidePolygons(
		manifold, 
		(shapeA instanceof box2d.b2PolygonShape)? shapeA : null, xfA, 
		(shapeB instanceof box2d.b2PolygonShape)? shapeB : null, xfB);
}

