//
//
// 1. Paste this into the "script" section of a
// google sheet
// 2. setup your collumns in the order of:
// URL,utm_source,utm_medium,utm_term,utm_content,utm_campaign
// 3. in the column you want the tracking URL, use:
// =track(A1,B1,C1,D1,E1,F1)
// 4. Profit!
//
//

// combine tracking elements together, create tracking URL
function track(url,source,medium,term,content,campaign) {
  if(url.indexOf('?') > -1)
  {
    var source_query = "&utm_source=";
  } else {
    var source_query = "?utm_source=";
  }
  var e_source = encodeURIComponent(source);
  var medium_query = "&utm_medium=";
  var e_medium = encodeURIComponent(medium);
  var term_query = "&utm_term=";
  var e_term = encodeURIComponent(term);
  var content_query = "&utm_content=";
  var e_content = encodeURIComponent(content);
  var campaign_query = "&utm_campaign=";
  var e_campaign = encodeURIComponent(campaign);
  var combined = url.concat(source_query,e_source,medium_query,e_medium,term_query,e_term,content_query,e_content,campaign_query,e_campaign);
  return combined;
}
