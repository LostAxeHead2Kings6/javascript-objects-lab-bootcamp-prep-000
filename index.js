recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  clone = object;
  clone.key = value;
  clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object.key = value;
  object
}

function deleteFromObjectByKey(object, key) {
  clone = object;
  delete clone.key;
  clone
}

function destructivelyUpdateObjectWithKeyAndValue(object, key) {
  delete object.key;
  object
}
