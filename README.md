# react-soundjs

Connect react components to SoundJS. A short snippet can get this running.

```jsx
class App extends React.Component {
  construct() {
    // ...
  }
  addItem() {
    // ...
  }
  removeItem() {
    // ...
  }
  render() {
    return (<SoundContext soundjs={create.Sound}>
      <div>
        <h1>react-soundjs Example</h1>
        <div onClick={this.addItem}>Add Item</div>
        <div>
          <SoundRegister sounds={[c4, g4]} />
          {this.state.items.map((item, index) => (
            <div key={index} onClick={this.removeItem} dataIndex={index}>
              <Sound onMount={c4} onUnmount={g4} />
              [x] {item.name}
            </div>
          ))}
        </div>
      </div>
    </SoundContext>);
  }
}
```
