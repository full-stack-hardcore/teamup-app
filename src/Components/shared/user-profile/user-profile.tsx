import * as React from 'react'
import { Redirect } from 'react-router-dom'
import Image from '../image/image'

interface IUserProfile {
  user?: any
}

class UserProfile extends React.Component<IUserProfile> {
  state: { redirect: boolean, path: string }
  constructor(props: any) {
    super(props)

    this.state = {
      redirect: false,
      path: ''
    }

    this.handleOnClickEdit = this.handleOnClickEdit.bind(this)
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this)
  }

  handleOnClickEdit(event: any){
    this.setState({path:'/user-edit',redirect: true})
  }

  handleOnClickDelete(event: any){
    this.setState({path:'/user-delete',redirect: true})
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.path} />
    } else {
      return
    }
  }


  render() {
    const userData = JSON.parse(this.props.user)
    const firstName = userData.name.split(' ')



    return (
      <div className="user-profile">
        <div className="table-container">
          <table className="user-table">
            <tr>
              <th colSpan={3} className="table-header">{firstName[0]}</th>
            </tr>
            <tr>
              <td rowSpan={6} className="user-profile-img">
              <table>
                <tr>
                  <td className="user-profile-img">
                    <div className="image-container">
                      <Image className="dog-img" src="dog.jpg" />
                    </div>
                  </td>
                </tr>
              </table>
              </td>
              <td className="data-description">Full name </td>
              <td className="data-information">{userData.name}</td>
            </tr>
            <tr>
              <td className="data-description">Job</td>
              <td className="data-information">Developer</td>
            </tr>
            <tr>
              <td className="data-description">Gender</td>
              <td className="data-information">Male</td>
            </tr>
            <tr>
              <td className="data-description">Email</td>
              <td className="data-information">{userData.email}</td>
            </tr>
            <tr>
              <td className="data-description">Phone</td>
              <td className="data-information">0800 5151511</td>
            </tr>
            <tr>
              <td className="data-description">Address</td>
              <td className="data-information">Rua fasoijiaiod, 13213, RS, Brazil</td>
            </tr>
            <tfoot className="table-footer">
              <tr>
                <td/>
                <td/>
                <td>
                  <button onClick={this.handleOnClickEdit} className="btn-edit">Edit</button>
                  <button onClick={this.handleOnClickDelete} className="btn-delete">Delete</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default UserProfile
