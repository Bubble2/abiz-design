(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [151],
  {
    Bjia: function(e, t, a) {
      'use strict';
      var l = a('0Owb'),
        n = a('PpiC'),
        c = a('cDcd'),
        r = a.n(c),
        m = a('ZpkN');
      t['a'] = r.a.forwardRef((e, t) => {
        var a = e.children,
          c = Object(n['default'])(e, ['children']);
        return r.a.createElement(
          m['a'],
          Object(l['default'])({}, c, { forwardedRef: t }),
          r.a.createElement(r.a.Fragment, null, a),
        );
      });
    },
    C2qX: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['controller-checkbox-miccn-demo'].component,
          ));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['controller-checkbox-miccn-demo']
                .previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    E4qO: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['group-checkbox-miccn-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['group-checkbox-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    GOXu: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = a('dEAq'),
        r = (a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia'));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h2',
              { id: 'api' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
            ),
            n.a.createElement(
              'h3',
              { id: '\u5c5e\u6027' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#\u5c5e\u6027', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5c5e\u6027',
            ),
            n.a.createElement(
              'h4',
              { id: 'checkbox' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#checkbox', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Checkbox',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'autoFocus'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u81ea\u52a8\u83b7\u53d6\u7126\u70b9',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'checked'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u5f53\u524d\u662f\u5426\u9009\u4e2d',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'defaultChecked'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u521d\u59cb\u662f\u5426\u9009\u4e2d',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'disabled'),
                  n.a.createElement('td', null, '\u5931\u6548\u72b6\u6001'),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'indeterminate'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8bbe\u7f6e indeterminate \u72b6\u6001\uff0c\u53ea\u8d1f\u8d23\u6837\u5f0f\u63a7\u5236',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onChange'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570',
                  ),
                  n.a.createElement('td', null, 'function(e:Event)'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'h4',
              { id: 'checkbox-group' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#checkbox-group', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Checkbox Group',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u53c2\u6570'),
                  n.a.createElement('th', null, '\u8bf4\u660e'),
                  n.a.createElement('th', null, '\u7c7b\u578b'),
                  n.a.createElement('th', null, '\u9ed8\u8ba4\u503c'),
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'defaultValue'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u9009\u4e2d\u7684\u9009\u9879',
                  ),
                  n.a.createElement('td', null, 'string[]'),
                  n.a.createElement('td', null, '[]'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'disabled'),
                  n.a.createElement('td', null, '\u6574\u7ec4\u5931\u6548'),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'name'),
                  n.a.createElement(
                    'td',
                    null,
                    'CheckboxGroup \u4e0b\u6240\u6709 ',
                    n.a.createElement('code', null, 'input[type="checkbox"]'),
                    ' \u7684 ',
                    n.a.createElement('code', null, 'name'),
                    ' \u5c5e\u6027',
                  ),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'options'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u53ef\u9009\u9879',
                  ),
                  n.a.createElement('td', null, 'string[] | Option[]'),
                  n.a.createElement('td', null, '[]'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'value'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6307\u5b9a\u9009\u4e2d\u7684\u9009\u9879',
                  ),
                  n.a.createElement('td', null, 'string[]'),
                  n.a.createElement('td', null, '[]'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onChange'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u53d8\u5316\u65f6\u56de\u8c03\u51fd\u6570',
                  ),
                  n.a.createElement('td', null, 'function(checkedValue)'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'h5',
              { id: 'option' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#option', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Option',
            ),
            n.a.createElement(r['a'], {
              code:
                '\ninterface Option {\n  label: string;\n  value: string;\n  disabled?: boolean;\n}\n',
              lang: 'typescript',
            }),
            n.a.createElement(
              'h3',
              { id: '\u65b9\u6cd5' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#\u65b9\u6cd5', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u65b9\u6cd5',
            ),
            n.a.createElement(
              'h4',
              { id: 'checkbox-1' },
              n.a.createElement(
                c['AnchorLink'],
                { to: '#checkbox-1', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'Checkbox',
            ),
            n.a.createElement(
              'table',
              null,
              n.a.createElement(
                'thead',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('th', null, '\u540d\u79f0'),
                  n.a.createElement('th', null, '\u63cf\u8ff0'),
                  n.a.createElement('th', null, '\u7248\u672c'),
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'blur()'),
                  n.a.createElement('td', null, '\u79fb\u9664\u7126\u70b9'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'focus()'),
                  n.a.createElement('td', null, '\u83b7\u53d6\u7126\u70b9'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
          ),
        );
      };
    },
    LJyL: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['check-all-checkbox-miccn-demo'].component,
          ));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['check-all-checkbox-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    'MM+7': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = a('dEAq'),
        r = a('g5U0'),
        m = (a('ekZX'), a('ltCa'));
      a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'h2',
              { id: '\u591a\u9009\u6846' },
              n.a.createElement(
                c['AnchorLink'],
                {
                  to: '#\u591a\u9009\u6846',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u591a\u9009\u6846',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('TMbv').default(),
              }),
            ),
            n.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              n.a.createElement(
                c['AnchorLink'],
                {
                  to: '#\u4ee3\u7801\u6f14\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4ee3\u7801\u6f14\u793a',
            ),
            n.a.createElement(
              m['a'],
              { gutter: '8' },
              n.a.createElement(
                r['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('xaUd').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('C2qX').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('LJyL').default(),
                  }),
                ),
              ),
              n.a.createElement(
                r['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('eor8').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('E4qO').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('mPcq').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('GOXu').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    TMbv: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement('p', null, '\u591a\u9009\u6846\u3002'),
            n.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              n.a.createElement(
                c['AnchorLink'],
                {
                  to: '#\u4f55\u65f6\u4f7f\u7528',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u4f55\u65f6\u4f7f\u7528',
            ),
            n.a.createElement(
              'ul',
              null,
              n.a.createElement(
                'li',
                null,
                '\u5728\u4e00\u7ec4\u53ef\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u65f6\uff1b',
              ),
              n.a.createElement(
                'li',
                null,
                '\u5355\u72ec\u4f7f\u7528\u53ef\u4ee5\u8868\u793a\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u7684\u5207\u6362\uff0c\u548c ',
                n.a.createElement('code', null, 'switch'),
                ' \u7c7b\u4f3c\u3002\u533a\u522b\u5728\u4e8e\u5207\u6362 ',
                n.a.createElement('code', null, 'switch'),
                ' \u4f1a\u76f4\u63a5\u89e6\u53d1\u72b6\u6001\u6539\u53d8\uff0c\u800c ',
                n.a.createElement('code', null, 'checkbox'),
                ' \u4e00\u822c\u7528\u4e8e\u72b6\u6001\u6807\u8bb0\uff0c\u9700\u8981\u548c\u63d0\u4ea4\u64cd\u4f5c\u914d\u5408\u3002',
              ),
            ),
          ),
        );
      };
    },
    eor8: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['disabled-checkbox-miccn-demo'].component,
          ));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['disabled-checkbox-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    g5U0: function(e, t, a) {
      'use strict';
      var l = a('kPKH');
      a('h9md');
      t['a'] = l['a'];
    },
    ltCa: function(e, t, a) {
      'use strict';
      var l = a('BMrR');
      a('7xIR');
      t['a'] = l['a'];
    },
    mPcq: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['layout-checkbox-miccn-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['layout-checkbox-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
    xaUd: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        c = (a('dEAq'), a('g5U0'), a('ekZX')),
        r =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['basic-checkbox-miccn-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              c['default'],
              a('JjdP').default['basic-checkbox-miccn-demo'].previewerProps,
              n.a.createElement(r, null),
            ),
          ),
        );
      };
    },
  },
]);
