(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [132],
  {
    AltL: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
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
                r['AnchorLink'],
                { to: '#api', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              'API',
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
                ),
              ),
              n.a.createElement(
                'tbody',
                null,
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'title'),
                  n.a.createElement('td', null, '\u63d0\u793a\u6587\u5b57'),
                  n.a.createElement('td', null, 'ReactNode | () => ReactNode'),
                  n.a.createElement('td', null, '-'),
                ),
              ),
            ),
            n.a.createElement(
              'h3',
              { id: '\u5171\u540c\u7684-api' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u5171\u540c\u7684-api',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u5171\u540c\u7684 API',
            ),
            n.a.createElement(
              'p',
              null,
              '\u4ee5\u4e0b API \u4e3a Tooltip\u3001Popconfirm\u3001Popover \u5171\u4eab\u7684 API\u3002',
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
                  n.a.createElement('td', null, 'align'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u8be5\u503c\u5c06\u5408\u5e76\u5230 placement \u7684\u914d\u7f6e\u4e2d\uff0c\u8bbe\u7f6e\u53c2\u8003 ',
                    n.a.createElement(
                      r['Link'],
                      { to: 'https://github.com/react-component/tooltip' },
                      'rc-tooltip',
                    ),
                  ),
                  n.a.createElement('td', null, 'object'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'arrowPointAtCenter'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u7bad\u5934\u662f\u5426\u6307\u5411\u76ee\u6807\u5143\u7d20\u4e2d\u5fc3',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'autoAdjustOverflow'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6c14\u6ce1\u88ab\u906e\u6321\u65f6\u81ea\u52a8\u8c03\u6574\u4f4d\u7f6e',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'true'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'color'),
                  n.a.createElement('td', null, '\u80cc\u666f\u989c\u8272'),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null, '4.3.0'),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'defaultVisible'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9ed8\u8ba4\u662f\u5426\u663e\u9690',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'destroyTooltipOnHide'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u5173\u95ed\u540e\u662f\u5426\u9500\u6bc1 Tooltip\uff0c\u5f53 ',
                    n.a.createElement('code', null, 'keepParent'),
                    ' \u4e3a ',
                    n.a.createElement('code', null, 'false'),
                    ' \u65f6\u9500\u6bc1\u7236\u5bb9\u5668',
                  ),
                  n.a.createElement(
                    'td',
                    null,
                    'boolean | ',
                    '{',
                    ' keepParent?: boolean ',
                    '}',
                  ),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'getPopupContainer'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6d6e\u5c42\u6e32\u67d3\u7236\u8282\u70b9\uff0c\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a',
                  ),
                  n.a.createElement('td', null, 'function(triggerNode)'),
                  n.a.createElement('td', null, '() => document.body'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'mouseEnterDelay'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u5165\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u663e\u793a Tooltip\uff0c\u5355\u4f4d\uff1a\u79d2',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '0.1'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'mouseLeaveDelay'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u9f20\u6807\u79fb\u51fa\u540e\u5ef6\u65f6\u591a\u5c11\u624d\u9690\u85cf Tooltip\uff0c\u5355\u4f4d\uff1a\u79d2',
                  ),
                  n.a.createElement('td', null, 'number'),
                  n.a.createElement('td', null, '0.1'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'overlayClassName'),
                  n.a.createElement('td', null, '\u5361\u7247\u7c7b\u540d'),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'overlayStyle'),
                  n.a.createElement('td', null, '\u5361\u7247\u6837\u5f0f'),
                  n.a.createElement('td', null, 'object'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'placement'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u6c14\u6ce1\u6846\u4f4d\u7f6e\uff0c\u53ef\u9009 ',
                    n.a.createElement('code', null, 'top'),
                    ' ',
                    n.a.createElement('code', null, 'left'),
                    ' ',
                    n.a.createElement('code', null, 'right'),
                    ' ',
                    n.a.createElement('code', null, 'bottom'),
                    ' ',
                    n.a.createElement('code', null, 'topLeft'),
                    ' ',
                    n.a.createElement('code', null, 'topRight'),
                    ' ',
                    n.a.createElement('code', null, 'bottomLeft'),
                    ' ',
                    n.a.createElement('code', null, 'bottomRight'),
                    ' ',
                    n.a.createElement('code', null, 'leftTop'),
                    ' ',
                    n.a.createElement('code', null, 'leftBottom'),
                    ' ',
                    n.a.createElement('code', null, 'rightTop'),
                    ' ',
                    n.a.createElement('code', null, 'rightBottom'),
                  ),
                  n.a.createElement('td', null, 'string'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'top'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'trigger'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u89e6\u53d1\u884c\u4e3a\uff0c\u53ef\u9009 ',
                    n.a.createElement('code', null, 'hover'),
                    ' | ',
                    n.a.createElement('code', null, 'focus'),
                    ' | ',
                    n.a.createElement('code', null, 'click'),
                    ' | ',
                    n.a.createElement('code', null, 'contextMenu'),
                    '\uff0c\u53ef\u4f7f\u7528\u6570\u7ec4\u8bbe\u7f6e\u591a\u4e2a\u89e6\u53d1\u884c\u4e3a',
                  ),
                  n.a.createElement('td', null, 'string | string[]'),
                  n.a.createElement(
                    'td',
                    null,
                    n.a.createElement('code', null, 'hover'),
                  ),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'visible'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u7528\u4e8e\u624b\u52a8\u63a7\u5236\u6d6e\u5c42\u663e\u9690',
                  ),
                  n.a.createElement('td', null, 'boolean'),
                  n.a.createElement('td', null, 'false'),
                  n.a.createElement('td', null),
                ),
                n.a.createElement(
                  'tr',
                  null,
                  n.a.createElement('td', null, 'onVisibleChange'),
                  n.a.createElement(
                    'td',
                    null,
                    '\u663e\u793a\u9690\u85cf\u7684\u56de\u8c03',
                  ),
                  n.a.createElement('td', null, '(visible) => void'),
                  n.a.createElement('td', null, '-'),
                  n.a.createElement('td', null),
                ),
              ),
            ),
            n.a.createElement(
              'h2',
              { id: '\u6ce8\u610f' },
              n.a.createElement(
                r['AnchorLink'],
                { to: '#\u6ce8\u610f', 'aria-hidden': 'true', tabIndex: -1 },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u6ce8\u610f',
            ),
            n.a.createElement(
              'p',
              null,
              '\u8bf7\u786e\u4fdd ',
              n.a.createElement('code', null, 'Tooltip'),
              ' \u7684\u5b50\u5143\u7d20\u80fd\u63a5\u53d7 ',
              n.a.createElement('code', null, 'onMouseEnter'),
              '\u3001',
              n.a.createElement('code', null, 'onMouseLeave'),
              '\u3001',
              n.a.createElement('code', null, 'onFocus'),
              '\u3001',
              n.a.createElement('code', null, 'onClick'),
              ' \u4e8b\u4ef6\u3002',
            ),
          ),
        );
      };
    },
    B515: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq');
      a('g5U0'), a('ekZX'), a('ltCa'), a('Bjia');
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            'div',
            { className: 'markdown' },
            n.a.createElement(
              'p',
              null,
              '\u7b80\u5355\u7684\u6587\u5b57\u63d0\u793a\u6c14\u6ce1\u6846\u3002',
            ),
            n.a.createElement(
              'h2',
              { id: '\u4f55\u65f6\u4f7f\u7528' },
              n.a.createElement(
                r['AnchorLink'],
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
              'p',
              null,
              '\u9f20\u6807\u79fb\u5165\u5219\u663e\u793a\u63d0\u793a\uff0c\u79fb\u51fa\u6d88\u5931\uff0c\u6c14\u6ce1\u6d6e\u5c42\u4e0d\u627f\u8f7d\u590d\u6742\u6587\u672c\u548c\u64cd\u4f5c\u3002',
            ),
            n.a.createElement(
              'p',
              null,
              '\u53ef\u7528\u6765\u4ee3\u66ff\u7cfb\u7edf\u9ed8\u8ba4\u7684 ',
              n.a.createElement('code', null, 'title'),
              ' \u63d0\u793a\uff0c\u63d0\u4f9b\u4e00\u4e2a ',
              n.a.createElement(
                'code',
                null,
                '\u6309\u94ae/\u6587\u5b57/\u64cd\u4f5c',
              ),
              ' \u7684\u6587\u6848\u89e3\u91ca\u3002',
            ),
          ),
        );
      };
    },
    Bjia: function(e, t, a) {
      'use strict';
      var l = a('0Owb'),
        n = a('PpiC'),
        r = a('cDcd'),
        c = a.n(r),
        m = a('ZpkN');
      t['a'] = c.a.forwardRef((e, t) => {
        var a = e.children,
          r = Object(n['default'])(e, ['children']);
        return c.a.createElement(
          m['a'],
          Object(l['default'])({}, r, { forwardedRef: t }),
          c.a.createElement(c.a.Fragment, null, a),
        );
      });
    },
    FPiT: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c = (a('ltCa'), a('Bjia')),
        m = n.a.memo(a('JjdP').default['colorful-tooltip-jxc-demo'].component);
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['colorful-tooltip-jxc-demo'].previewerProps,
              n.a.createElement(m, null),
            ),
            n.a.createElement(
              'div',
              { className: 'markdown' },
              n.a.createElement(c['a'], {
                code: '.ant-tag {\n  margin-bottom: 8px;\n}\n',
                lang: 'css',
              }),
            ),
          ),
        );
      };
    },
    MkQV: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['auto-adjust-overflow-tooltip-jxc-demo']
              .component,
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
              r['default'],
              a('JjdP').default['auto-adjust-overflow-tooltip-jxc-demo']
                .previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    Myji: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['placement-tooltip-jxc-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['placement-tooltip-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
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
    'hi/Y': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['arrow-point-at-center-tooltip-jxc-demo']
              .component,
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
              r['default'],
              a('JjdP').default['arrow-point-at-center-tooltip-jxc-demo']
                .previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    ltCa: function(e, t, a) {
      'use strict';
      var l = a('BMrR');
      a('7xIR');
      t['a'] = l['a'];
    },
    'v+Po': function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = a('dEAq'),
        c = a('g5U0'),
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
              { id: '\u6587\u5b57\u63d0\u793a' },
              n.a.createElement(
                r['AnchorLink'],
                {
                  to: '#\u6587\u5b57\u63d0\u793a',
                  'aria-hidden': 'true',
                  tabIndex: -1,
                },
                n.a.createElement('span', { className: ['icon', 'icon-link'] }),
              ),
              '\u6587\u5b57\u63d0\u793a',
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('B515').default(),
              }),
            ),
            n.a.createElement(
              'h2',
              { id: '\u4ee3\u7801\u6f14\u793a' },
              n.a.createElement(
                r['AnchorLink'],
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
                c['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('hi/Y').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('vT8i').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('xoqi').default(),
                  }),
                ),
              ),
              n.a.createElement(
                c['a'],
                { span: 12 },
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('MkQV').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('Myji').default(),
                  }),
                ),
                n.a.createElement(
                  'div',
                  { className: ['code-box'] },
                  n.a.createElement(n.a.Fragment, {
                    children: a('FPiT').default(),
                  }),
                ),
              ),
            ),
            n.a.createElement(
              'div',
              null,
              n.a.createElement(n.a.Fragment, {
                children: a('AltL').default(),
              }),
              n.a.createElement('div', null),
            ),
          ),
        );
      };
    },
    vT8i: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(a('JjdP').default['basic-tooltip-jxc-demo'].component));
      t['default'] = function() {
        return n.a.createElement(
          n.a.Fragment,
          null,
          n.a.createElement(
            n.a.Fragment,
            null,
            n.a.createElement('div', { className: 'markdown' }),
            n.a.createElement(
              r['default'],
              a('JjdP').default['basic-tooltip-jxc-demo'].previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
    xoqi: function(e, t, a) {
      'use strict';
      a.r(t);
      var l = a('cDcd'),
        n = a.n(l),
        r = (a('dEAq'), a('g5U0'), a('ekZX')),
        c =
          (a('ltCa'),
          a('Bjia'),
          n.a.memo(
            a('JjdP').default['destroy-tooltip-on-hide-tooltip-jxc-demo']
              .component,
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
              r['default'],
              a('JjdP').default['destroy-tooltip-on-hide-tooltip-jxc-demo']
                .previewerProps,
              n.a.createElement(c, null),
            ),
          ),
        );
      };
    },
  },
]);
