# Model

The current model has changed, now is not based on plugins only which make
harder the interactions between serveral plugins. <br>
The model take bases on plugins and filters. <br>
A plugin is considered as a terminal component. <br>
Is it who's able to modify the DOM to render a media. <br>
A filter is a transitionnal component. <br>
The filter is able to modify media objects parameters and data. <br>
A media object should matches with filters by passing typeCheck conditions. <br>
Each true filter typeCheck, the filter is considered as a practicable one. <br>
Each of practicables filters are applied on the media object to distort it. <br>
After a filter application the media object should matches with less or equal filters. <br>
This is the default policy and it can be modified. <br>
After all filter applications, a matching with a plugin is reseached. <br>
Then the media object should matche with only one plugin. <br>
If a filtered media object matches with most of one plugin then a typeCheck must be 
wrong, the engine does not able to determine the kind of media and an error is raised. <br>

## To illustrate

Plugins like filters handled by managers, their structure is quietly the same but their function not. <br>
 
Image, audio, video, dash, pdf are plugins because they have just to expose their contents. <br>
Plugins are terminal components and their goal is to provide a way to display their contents. <br>

Crypto is a filter because it can be applied on various contents like images, videos, audios, pdfs ... <br>
Filters are transitionnal components, a media object enter in and leave out modified or not. <br>
After filters the engine should be able to determine which only plugin should be chose to display content. <br>

With bad filters or typeCheck condition it's easy to come up to an ambiguous plugins matching. <br>

Is for this reason that engine has a custom callback to set up conditions to detect these incoherences. <br>

For example, the callback observes if a applied filter has modified the matching between freshly 
outputed the media object and all the previous filters matches. If the filter application has changed
more than one match (the last applied filter match obviously) then at least 2 filters are conflictuals
and the engine should warn that something wrong happens or raise an error. <br>

## How does it works ?

You have your home page with some media-tags and you call the media-tag library on your HTML media-tag nodes. <br>
The media-tag call create an instance of media object for each calls. <br>
A media object collect all media-tags nodes attributes and start to parse it to extract some informations like
type of media, his attributes and others. <br>
After the media object is gave to the engine. <br>
For each media objects the engine make a chain with all matching filters and try to apply them on the media object concerned. <br>
Each filter applied must return the media object to the engine for continue the process. <br>
After all filters done, the engine try to identify the plugin able to display media object's content with required attributes. <br>
The plugin is selected and applied. <br>
The DOM is modified with the content display. <br>
