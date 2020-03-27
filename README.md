# Factory-Pattern-Basic
Working with the Addy Osmani Design Patterns book, developing examples of each. This one is a simple factory, used to generate various Media objects (CD's, LP's, Cassettes or 8-tracks)

## The What
So in re-reading Addy Osmani's book on Design Patterns (https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript), I noticed he talks a little about ES6 and its impact on some of these patterns. For example, in the case of the Factory pattern, the classes we implement within the Factory can be ES6 classes. This is an attempt at building one.

Also, this uses front-end import/export statements, another great feature of ES6 that lets our code be a lot more modular.

## The Why
I've always been a fan of design patterns, I see a lot of value in them, and there's a lot of conversation about them. But one thing I've often noted is that the conversation sort of comes back to people using terminology without fully understanding what a thing is. As an example, the reason I started this was a conversation with someone regarding what they thought was a Factory pattern implementation, which was more of a self-contained Factory-Singleton-Observer-ish thing. So I want to try to clarify what these patterns are, what the pros and cons of each might be, and how they can be intermingled.

There is no one "right" way. And I find that I don't tend to write a purely Factory pattern - it wants to be integrated with others. But I tried to isolate this one purely as a Factory, and later I'll let it interact with other patterns.

One I'm looking forward to is the one I mentioned above: a Factory-Singleton that contains a collection of Observers. We'll see.
