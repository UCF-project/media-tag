# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/) and
[Keep a CHANGELOG](http://keepachangelog.com/).

## v0.2.5
### Changed :
- Pdfjs plufing update with pdfjs viewer as new way to render, if pdfjs viewer repertory is not found the browser default render is used instead.

### Added :
- MediaTag as object. (v0.1 allows dynamic media type changing according to monitor status like network availability or bandwidth. So, we have to use several media type inside a same media-tag and an only media object becomes insufficient to fulfill the adaptative media changing)
- Some actions have been defined to test media visibility at some event but have no monitors yet. 

## v0.2.4
- ProcessingEngine default plugin reference is accessible by ProcessingEngine instance and can be set with setDefaultPlugin() method.
- All renderer now returns to MediaTag.processingEngine instance the mediaObject like filters and sanitizers.
- Download plugin has been upgraded to recognize mediaObject.name property at download or data-attr-type when name is not present. The goal is to set the correct file extension according to mediaObject. By default any unrecognize file type is considerered as text by FileSaver API.

## v0.2.3

### Changed
- Avoid static classes
- Some changes inside ProcessingEngine
- MediaTag stores and engine instance begins by lower case character (ex: MediaTag.uriStore instead of MediaTag.UriStore)

### Added
- Abstract group plugin to process several plugins sequentially at same processingEngine run step

## v0.2.2

### Changed
- Redesign to object oriented ES6
- Avoid orchestrator and logics
- Redesign of processing engine (RunningEngine) to stack model

### Added
- Add plugins types : renderer, filter, matcher, sanitizer

## v0.2.1

### Changed
- Redesign of architecture and functionalities

### Added
- Add filters
- Dynamic loading according to orchestrator

## v0.2.0

### Changed
- Redesign of architecture and functionalities
