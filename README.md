# node-python-funcs

[![Greenkeeper badge](https://badges.greenkeeper.io/wolfy1339/node-python-funcs.svg)](https://greenkeeper.io/)

Implements various Python functions and methods for use in Node

## Docs
### Classes

<dl>
<dt><a href="#str">str</a></dt>
<dd><p>Class to imitate Python str</p>
</dd>
<dt><a href="#dict">dict</a></dt>
<dd><p>Class to imitate Python dicts</p>
</dd>
</dl>

### Functions

<dl>
<dt><a href="#range">range([start], stop, [step])</a></dt>
<dd><p>Function to imitate Python&#39;s range function
Returns an Array that produces a sequence of integers from start (inclusive) to stop (exclusive) by step.</p>
</dd>
<dt><a href="#len">len(thing)</a> ⇒ `number`</dt>
<dd><p>Function to imitate Python&#39;s len() function.
Wrapper function around the <code>.length</code> property</p>
</dd>
<dt><a href="#partition">partition(string, sep)</a> ⇒ `array`</dt>
<dd><p>Function to imitate Python&#39;s `str.partition()` method, since JavaScript can&#39;t split x times</p>
</dd>
<dt><a href="#split">split(string, sep, [maxCount])</a> ⇒ `array`</dt>
<dd><p>Function to imitate Python&#39;s `str.split()` method, since JavaScript can&#39;t split x times</p>
</dd>
<dt><a href="#chunks">chunks(l, n)</a></dt>
<dd><p>Yield successive n-sized chunks from l.</p>
</dd>
</dl>

<a name="str"></a>

### str
Class to imitate Python str

**Kind**: global class

* [str](#str)
    * [new str(string)](#new_str_new)
    * [.partition()](#str+partition) ⇐ [`partition`](#partition)
    * [.split()](#str+split) ⇐ [`split`](#split)

<a name="new_str_new"></a>

#### new str(string)

| Param | Type |
| --- | --- |
| string | `string` |

<a name="str+partition"></a>

#### str.partition() ⇐ [`partition`](#partition)
**Kind**: instance method of [`str`](#str)
**Extends**: [`partition`](#partition)
<a name="str+split"></a>

#### str.split() ⇐ [`split`](#split)
**Kind**: instance method of [`str`](#str)
**Extends**: [`split`](#split)
<a name="dict"></a>

### dict
Class to imitate Python dicts

**Kind**: global class

* [dict](#dict)
    * [new dict(value)](#new_dict_new)
    * [.items()](#dict+items) ⇒ `array`
    * [.clear()](#dict+clear)
    * [.get(key, [def])](#dict+get) ⇒ `object` \| `array` \| `string` \| `function` \| `boolean` \| `number`
    * [.pop(key, [def])](#dict+pop) ⇒ `*`
    * [.setdefault(key, [def])](#dict+setdefault) ⇒ `*`
    * [.keys()](#dict+keys) ⇒ `array`
    * [.update(other)](#dict+update)
    * [.values()](#dict+values) ⇒ `array`

<a name="new_dict_new"></a>

#### new dict(value)

| Param | Type | Description |
| --- | --- | --- |
| value | `object` | The native JavaScript object you wish to |

<a name="dict+items"></a>

#### dict.items() ⇒ `array`
**Kind**: instance method of [`dict`](#dict)
<a name="dict+clear"></a>

#### dict.clear()
**Kind**: instance method of [`dict`](#dict)
<a name="dict+get"></a>

#### dict.get(key, [def]) ⇒ `object` \| `array` \| `string` \| `function` \| `boolean` \| `number`
**Kind**: instance method of [`dict`](#dict)

| Param | Type | Default |
| --- | --- | --- |
| key | `string` |  |
| [def] | <code>\*</code> | <code></code> |

<a name="dict+pop"></a>

#### dict.pop(key, [def]) ⇒ `*`
**Kind**: instance method of [`dict`](#dict)

| Param | Type | Default |
| --- | --- | --- |
| key | `string` |  |
| [def] | `*` | <code></code> |

<a name="dict+setdefault"></a>

#### dict.setdefault(key, [def]) ⇒ <code>\*</code>
**Kind**: instance method of [`dict`](#dict)

| Param | Type | Default |
| --- | --- | --- |
| key | `string` |  |
| [def] | <code>\*</code> | <code></code> |

<a name="dict+keys"></a>

#### dict.keys() ⇒ `array`
**Kind**: instance method of [`dict`](#dict)
<a name="dict+update"></a>

#### dict.update(other)
**Kind**: instance method of [`dict`](#dict)

| Param | Type |
| --- | --- |
| other | `object` |

<a name="dict+values"></a>

#### dict.values() ⇒ `array`
**Kind**: instance method of [`dict`](#dict)
<a name="range"></a>

### range([start], stop, [step])
Function to imitate Python's range function
Returns an Array that produces a sequence of integers from start (inclusive) to stop (exclusive) by step.

**Kind**: global function

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [start] | `number` |  | The starting number. Defaults to 0. |
| stop | `number` |  | The end number. |
| [step] | `number` | `1` | Specifies the increment (or decrement). Defaults to 1. |

<a name="len"></a>

### len(thing) ⇒ `number`
Function to imitate Python's `len()` function.
Wrapper function around the `.length` property.

**Kind**: global function

| Param | Type |
| --- | --- |
| thing | <code>\*</code> |

<a name="partition"></a>

### partition(string, sep) ⇒ `array`
Function to imitate Python's `str.split()` method, since JavaScript can't split x times

**Kind**: global function
**Returns**: `array` - An Array containing the split string

| Param | Type | Description |
| --- | --- | --- |
| string | `string` | The string you want split. |
| sep | `string` | The seperator by which you want the string to be split |

<a name="split"></a>

### split(string, sep, [maxCount]) ⇒ `array`
Function to imitate Python's str.split method, since JavaScript can't split x times

**Kind**: global function
**Returns**: `array` - An Array containing the split string

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| string | `string` |  | The string you want split. |
| sep | `string` |  | The seperator by which you want the string to be split |
| [maxCount] | `number` | <code></code> | The maximum count of times you wish to split |

<a name="chunks"></a>

### chunks(l, n)
Yield successive n-sized chunks from l.

**Kind**: global function

| Param | Type |
| --- | --- |
| l | `array` |
| n | `number` |