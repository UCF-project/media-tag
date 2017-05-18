# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/) and
[Keep a CHANGELOG](http://keepachangelog.com/).

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
