(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{369:function(e){e.exports=JSON.parse('{"id":"node--article--default--form","resourceType":"node--article","fields":[{"id":"title","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"string_textfield","weight":0,"settings":{"config":{},"display":{"size":60,"placeholder":""},"storage":{}},"thirdPartySettings":[]},{"id":"body","description":"","label":{"text":"Body","position":null},"cardinality":1,"required":false,"type":"text_textarea_with_summary","weight":1,"settings":{"config":{"display_summary":true,"required_summary":false},"display":{"rows":9,"summary_rows":3,"placeholder":"","show_summary":false},"storage":[]},"thirdPartySettings":[]},{"id":"field_tags","description":"Enter a comma-separated list. For example: Amsterdam, Mexico City, \\"Cleveland, Ohio\\"","label":{"text":"Tags","position":null},"cardinality":-1,"required":false,"type":"entity_reference_autocomplete_tags","weight":3,"settings":{"config":{"handler":"default:taxonomy_term","handler_settings":{"target_bundles":{"tags":"tags"},"sort":{"field":"_none"},"auto_create":true}},"display":{"match_operator":"CONTAINS","match_limit":10,"size":60,"placeholder":""},"storage":{"target_type":"taxonomy_term"}},"thirdPartySettings":[]},{"id":"field_image","description":"","label":{"text":"Image","position":null},"cardinality":1,"required":false,"type":"image_image","weight":4,"settings":{"config":{"handler":"default:file","handler_settings":[],"file_directory":"[date:custom:Y]-[date:custom:m]","file_extensions":"png gif jpg jpeg","max_filesize":"","max_resolution":"","min_resolution":"","alt_field":true,"alt_field_required":true,"title_field":false,"title_field_required":false,"default_image":{"uuid":null,"alt":"","title":"","width":null,"height":null}},"display":{"progress_indicator":"throbber","preview_image_style":"thumbnail"},"storage":{"target_type":"file","display_field":false,"display_default":false,"uri_scheme":"public","default_image":{"uuid":null,"alt":"","title":"","width":null,"height":null}}},"thirdPartySettings":[]},{"id":"uid","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"entity_reference_autocomplete","weight":5,"settings":{"config":{},"display":{"match_operator":"CONTAINS","match_limit":10,"size":60,"placeholder":""},"storage":{}},"thirdPartySettings":[]},{"id":"created","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"datetime_timestamp","weight":10,"settings":{"config":{},"display":[],"storage":{}},"thirdPartySettings":[]},{"id":"promote","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"boolean_checkbox","weight":15,"settings":{"config":{},"display":{"display_label":true},"storage":{}},"thirdPartySettings":[]},{"id":"sticky","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"boolean_checkbox","weight":16,"settings":{"config":{},"display":{"display_label":true},"storage":{}},"thirdPartySettings":[]},{"id":"comment","description":"","label":{"text":"Comments","position":null},"cardinality":1,"required":false,"type":"comment_default","weight":20,"settings":{"config":{"default_mode":1,"per_page":50,"anonymous":0,"form_location":true,"preview":1},"display":[],"storage":{"comment_type":"comment"}},"thirdPartySettings":[]},{"id":"path","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"path","weight":30,"settings":{"config":{},"display":[],"storage":{}},"thirdPartySettings":[]},{"id":"status","description":null,"label":{"text":null,"position":null},"cardinality":null,"required":false,"type":"boolean_checkbox","weight":120,"settings":{"config":{},"display":{"display_label":true},"storage":{}},"thirdPartySettings":[]}],"groups":[],"config":{"entityType":"node","bundle":"article","mode":"default","schemaType":"form","href":"/jsonapi/node/article"}}')}}]);