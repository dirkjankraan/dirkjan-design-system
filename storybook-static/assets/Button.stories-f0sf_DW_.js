import{j as e}from"./jsx-runtime-u17CrQMm.js";const p=()=>e.jsx("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:e.jsx("circle",{cx:"10",cy:"10",r:"7",stroke:"currentColor",strokeWidth:"1.67"})});function r({variant:a="primary",size:u="md",isDisabled:m=!1,showLeadingIcon:g=!1,showTrailingIcon:y=!1,label:v="Button CTA",className:h,...b}){const f=["btn",`btn--${a}`,`btn--${u}`,m?"btn--disabled":"",h??""].filter(Boolean).join(" ");return e.jsxs("button",{className:f,disabled:m,...b,children:[g&&e.jsx("span",{className:"btn__icon",children:e.jsx(p,{})}),e.jsx("span",{children:v}),y&&e.jsx("span",{className:"btn__icon",children:e.jsx(p,{})})]})}r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button CTA'",computed:!1}}}};const I={title:"Components/Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost"]},size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},label:{control:"text"}},args:{label:"Button CTA",isDisabled:!1,showLeadingIcon:!1,showTrailingIcon:!1}},s={args:{variant:"primary",size:"md"}},n={args:{variant:"secondary",size:"md"}},i={args:{variant:"ghost",size:"md"}},t={name:"All Sizes (Primary)",render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{...a,size:"sm",label:"Small"}),e.jsx(r,{...a,size:"md",label:"Medium"}),e.jsx(r,{...a,size:"lg",label:"Large"})]}),args:{variant:"primary"}},o={args:{variant:"primary",size:"md",showLeadingIcon:!0}},l={args:{variant:"primary",size:"md",showTrailingIcon:!0}},c={args:{variant:"primary",size:"md",showLeadingIcon:!0,showTrailingIcon:!0}},d={name:"Disabled (all variants)",render:a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{...a,variant:"primary",isDisabled:!0,label:"Primary"}),e.jsx(r,{...a,variant:"secondary",isDisabled:!0,label:"Secondary"}),e.jsx(r,{...a,variant:"ghost",isDisabled:!0,label:"Ghost"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    size: 'md'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'All Sizes (Primary)',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button {...args} size="sm" label="Small" />
      <Button {...args} size="md" label="Medium" />
      <Button {...args} size="lg" label="Large" />
    </div>,
  args: {
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    showLeadingIcon: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    showTrailingIcon: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Disabled (all variants)',
  render: args => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button {...args} variant="primary" isDisabled label="Primary" />
      <Button {...args} variant="secondary" isDisabled label="Secondary" />
      <Button {...args} variant="ghost" isDisabled label="Ghost" />
    </div>
}`,...d.parameters?.docs?.source}}};const w=["Primary","Secondary","Ghost","AllSizes","WithLeadingIcon","WithTrailingIcon","WithBothIcons","Disabled"];export{t as AllSizes,d as Disabled,i as Ghost,s as Primary,n as Secondary,c as WithBothIcons,o as WithLeadingIcon,l as WithTrailingIcon,w as __namedExportsOrder,I as default};
